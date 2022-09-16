package com.koc.MemoryMatch.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.koc.MemoryMatch.dao.GameDao;
import com.koc.MemoryMatch.models.Game;
import com.koc.MemoryMatch.exceptions.*;

@RestController
@RequestMapping("/memorymatch/games")
public class GameController {
	
	@Autowired
	private GameDao gameDao;
	
	@GetMapping
	public List<Game> getAllGames(){
		return this.gameDao.findAll();
	}
	
	@GetMapping("/{game_id}")
	public Game getGameById(@PathVariable (value = "game_id") long gameId) {
		return this.gameDao
				.findById(gameId)
				.orElseThrow(() -> new ResourceNotFoundException("Game not found with id : " + gameId));
	}
	
	@PostMapping
	public Game createGame(@RequestBody Game game) {
		return this.gameDao.save(game);
	}
	
	@PutMapping("/{game_id}")
	public Game updateGame(@RequestBody Game game, @PathVariable ("game_id") long gameId) {
		Game existingGame = this.gameDao.findById( gameId)
		.orElseThrow(() -> new ResourceNotFoundException("Game not found with id : " + gameId));
		existingGame.setUserId(game.getUserId());
		existingGame.setTurn(game.getTurn());
		existingGame.setDeck(game.getDeck());
		existingGame.setScore(game.getScore());		
		return this.gameDao.save(existingGame);
	}
	
	@DeleteMapping("/{game_id}")
	public ResponseEntity<Game> deleteGame(@PathVariable ("game_id") long gameId){
		Game existingGame = this.gameDao.findById(gameId)
				.orElseThrow(() -> new ResourceNotFoundException("Game not found with id : " + gameId));
		this.gameDao.delete(existingGame);
		return ResponseEntity.ok().build();	
	}
}