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

import com.koc.MemoryMatch.dao.UserDao;
import com.koc.MemoryMatch.models.User;
import com.koc.MemoryMatch.exceptions.*;

@RestController
@RequestMapping("/memorymatch/users")
public class UserController {
	
	@Autowired
	private UserDao userDao;
	
	@GetMapping
	public List<User> getAllUsers(){
		return this.userDao.findAll();
	}
	
	@GetMapping("/{user_id}")
	public User getUserById(@PathVariable (value = "user_id") long userId) {
		return this.userDao
				.findById(userId)
				.orElseThrow(() -> new ResourceNotFoundException("User not found with id : " + userId));
	}
	
	@PostMapping
	public User createUser(@RequestBody User user) {
		return this.userDao.save(user);
	}
	
	@PutMapping("/{user_id}")
	public User updateUser(@RequestBody User user, @PathVariable ("user_id") long userId) {
		User existingUser = this.userDao.findById( userId)
		.orElseThrow(() -> new ResourceNotFoundException("User not found with id : " + userId));
		existingUser.setName(user.getName());
		existingUser.setEmail(user.getEmail());
		existingUser.setLogin(user.getLogin());
		existingUser.setPassword(user.getPassword());
		return this.userDao.save(existingUser);
	}
	
	@DeleteMapping("/{user_id}")
	public ResponseEntity<User> deleteUser(@PathVariable ("user_id") long userId){
		User existingUser = this.userDao.findById(userId)
				.orElseThrow(() -> new ResourceNotFoundException("User not found with id : " + userId));
		this.userDao.delete(existingUser);
		return ResponseEntity.ok().build();	
	}
}
