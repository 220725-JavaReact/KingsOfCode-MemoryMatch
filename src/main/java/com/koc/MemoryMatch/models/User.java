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
	private int user_id;
	
	@Column(name = "name")
	private String name;
	
	@Column(name = "email")
	private String email;
	
	@Column(name = "username")
	private String username;
	
	@Column(name = "user_password")
	private String user_password;

	public User() {
	}

	public User(String name, String email, String username, String user_password) {
		super();
		this.name = name;
		this.email = email;
		this.username = username;
		this.user_password = user_password;
	}

	public long getUserId() {
		return user_id;
	}

	public void setUserId(int user_id) {
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

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getUserPassword() {
		return user_password;
	}

	public void setUserPassword(String user_password) {
		this.user_password = user_password;
	}

	@Override
	public String toString() {
		return "User{" + "user_id=" + this.user_id + ", name=" + this.name + ",  email=" + this.email + ", username="
				+ this.username + ", user_password=" + this.user_password + "}";

	}

}
