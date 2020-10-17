package com.test.AngularTestApp.controller;

import java.util.List;
import java.util.concurrent.ExecutionException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.test.AngularTestApp.Links;
import com.test.AngularTestApp.model.User;
import com.test.AngularTestApp.service.UserService;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@RestController
@RequestMapping("/api/")
public class UserController {
	
    @Autowired
    UserService userService;
	
    @GetMapping(path = Links.USER_LIST)
    public ResponseEntity<?> listUsers() throws InterruptedException, ExecutionException {
        List<User> resource = userService.getUsers();
        return ResponseEntity.ok(resource);
    }
	
	@PostMapping(path = Links.USER_ADD)
	public ResponseEntity<?> saveUser(@RequestBody User user) throws InterruptedException, ExecutionException {
        User resource = userService.saveUser(user);
        return ResponseEntity.ok(resource);
    }
	
	@PostMapping(path = Links.USER_AUTH)
	public ResponseEntity<?> authUser(@RequestBody User user) throws InterruptedException, ExecutionException {
        User resource = userService.saveUser(user);
        return ResponseEntity.ok(resource);
    }
}
