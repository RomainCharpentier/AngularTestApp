package com.test.AngularTestApp.service;

import java.util.List;
import java.util.concurrent.ExecutionException;

import org.springframework.stereotype.Component;

import com.test.AngularTestApp.model.User;
import com.test.AngularTestApp.repository.UserRepository;

@Component
public class UserService {

	private UserRepository userRepository;

	public UserService(UserRepository userRepository) {
		this.userRepository = userRepository;
	}

	public List<User> getUsers() throws InterruptedException, ExecutionException {
		return userRepository.findAll();
	}

	public User saveUser(User user) throws InterruptedException, ExecutionException {
		return userRepository.save(user);
	}

}
