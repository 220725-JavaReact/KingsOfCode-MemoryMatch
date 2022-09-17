package com.koc.MemoryMatch.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import com.koc.MemoryMatch.utils.Logger;

@Entity
@Table(name = "games")
public class Game {	

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "game_id")
	private long game_id;

	@Column(name = "user_id")
	private long user_id;

	@Column(name = "turn")
	private int turn;

	@Column(name = "deck")
	private int deck;

	@Column(name = "score")
	private double score;

	public Game() {
	}

	public Game(long user_id, int turn, int deck, double score) {
		super();
		this.user_id = user_id;
		this.turn = turn;
		this.deck = deck;
		this.score = score;
	}
	
	public Game(long game_id, long user_id, int turn, int deck, double score) {
		super();
		this.game_id = game_id;
		this.user_id = user_id;
		this.turn = turn;
		this.deck = deck;
		this.score = score;
	}
	
	public long getGameId() {
		return game_id;
	}

	public void setGameId(long game_id) {
		this.game_id = game_id;
	}

	public long getUserId() {
		return user_id;
	}

	public void setUserId(long user_id) {
		this.user_id = user_id;
	}

	public int getTurn() {
		return turn;
	}

	public void setTurn(int turn) {
		this.turn = turn;
	}

	public int getDeck() {
		return deck;
	}

	public void setDeck(int deck) {
		this.deck = deck;
	}

	public double getScore() {
		return score;
	}

	public void setScore(double score) {
		this.score = score;
	}

	@Override
	public String toString() {
		return "User{" + "game_id=" + this.game_id + ", user_id=" + this.user_id + ", turn=" + this.turn
				+ ", deck=" + this.deck + ", score=" + this.score + "}";

	}
}
