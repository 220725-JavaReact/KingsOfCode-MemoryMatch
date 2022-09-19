package com.koc.MemoryMatch.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.ExampleMatcher;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.koc.MemoryMatch.dao.*;
import com.koc.MemoryMatch.models.*;
import com.koc.MemoryMatch.exceptions.*;
import com.koc.MemoryMatch.utils.*;

@RestController
@RequestMapping("/memorymatch/login")
public class LoginController {
	
	Logger logger = Logger.getInstance();
	
	@Autowired
	private LoginDao userDao;
	
	@PostMapping
	public Boolean checkLogin(@RequestBody User user) {
		
		ExampleMatcher matcher = ExampleMatcher.matching()
				.withIncludeNullValues().withIgnorePaths("user_id","name", "email");
		 
		 User loginUser = new User();
		 loginUser.setLogin(user.getLogin());
		 loginUser.setPassword(user.getPassword());
		 loginUser.setName(user.getName());
		 loginUser.setEmail(user.getEmail());
		 loginUser.setId(user.getId());
		 Example<User> userExample = Example.of(loginUser, matcher);
		 
		 
		Boolean isExists = this.userDao.exists(userExample);
		logger.log(Logger.LogLevel.info, "User login = " + loginUser.getLogin());
		logger.log(Logger.LogLevel.info, "User password = " + loginUser.getPassword());
		logger.log(Logger.LogLevel.info, "userExample = " + userExample.toString());
		logger.log(Logger.LogLevel.info, "User exists = " + isExists);		
		
		return this.userDao.exists(userExample);
	}

}
