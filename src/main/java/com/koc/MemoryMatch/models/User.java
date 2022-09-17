package com.koc.MemoryMatch.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "users")
public class User {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "user_id")
	private long user_id;
	
	@Column(name = "name")
	private String name;
	
	@Column(name = "email")
	private String email;
	
	@Column(name = "login")
	private String login;
	
	@Column(name = "password")
	private String password;

	public User() {
	}

	public User(String name, String email, String login, String password) {
		super();
		this.name = name;
		this.email = email;
		this.name = login;
		this.password = password;
	}	
	
	public User(long user_id, String name, String email, String login, String password) {
		super();
		this.name = name;
		this.email = email;
		this.name = login;
		this.password = password;
		this.user_id = user_id;
	}
	
	public long getId() {
		return user_id;
	}

	public void setId(long user_id) {
		this.user_id = user_id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getLogin() {
		return login;
	}

	public void setLogin(String login) {
		this.login = login;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	@Override
	public String toString() {
		return "User{" + "user_id=" + this.user_id + ", name=" + this.name + ",  email=" + this.email + ", login="
				+ this.login + ", password=" + this.password + "}";

	}

}
