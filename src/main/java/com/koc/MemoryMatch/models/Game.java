package com.koc.MemoryMatch.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "games")
public class Game {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int game_id;

	@Column(name = "user_id")
	private int user_id;

	@Column(name = "turns")
	private int turns;

	@Column(name = "deck_size")
	private int deck_size;

	@Column(name = "score")
	private long score;

	public Game() {
	}

	public Game(int user_id, int turns, int deck_size, long score) {
		super();
		this.user_id = user_id;
		this.turns = turns;
		this.deck_size = deck_size;
		this.score = score;
	}
	
	public int getGameId() {
		return game_id;
	}

	public void setGameId(int game_id) {
		this.game_id = game_id;
	}

	public int getUserId() {
		return user_id;
	}

	public void setUserId(int user_id) {
		this.user_id = user_id;
	}

	public int getTurns() {
		return turns;
	}

	public void setTurns(int turns) {
		this.turns = turns;
	}

	public int getDeckSize() {
		return deck_size;
	}

	public void setDeckSize(int deck_size) {
		this.deck_size = deck_size;
	}

	public long getScore() {
		return score;
	}

	public void setScore(long score) {
		this.score = score;
	}

	@Override
	public String toString() {
		return "User{" + "game_id=" + this.game_id + ", user_id=" + this.user_id + ", turns=" + this.turns
				+ ", deck_size=" + this.deck_size + ", score=" + this.score + "}";

	}
}
