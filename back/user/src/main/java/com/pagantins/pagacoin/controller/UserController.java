package com.pagantins.pagacoin.controller;

import com.pagantins.pagacoin.domain.User;
import com.pagantins.pagacoin.service.user.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

@Controller
@RequestMapping("/api/user")
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping("/")
    ResponseEntity<List<User>> users() {
        List<User> users = userService.find();
        return ResponseEntity.ok(users);
    }
}