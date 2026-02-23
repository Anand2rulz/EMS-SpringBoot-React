package com.example.ems.controller;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.ems.dto.LoginRequest;
import com.example.ems.entity.User;
import com.example.ems.security.JwtUtil;
import com.example.ems.service.UserService;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:3000")
public class AuthController {

    @Autowired
    private UserService userService;

    @Autowired
    private JwtUtil jwtUtil;

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest request) {

        System.out.println("=== LOGIN API HIT ===");
        System.out.println("Username from UI: " + request.getUsername());
        System.out.println("Password from UI: " + request.getPassword());

        User user = userService.login(request.getUsername(), request.getPassword());

        if (user == null) {
            System.out.println("LOGIN FAILED ❌");
            return ResponseEntity.status(401).body("Invalid username or password");
        }

        System.out.println("LOGIN SUCCESS ✅ for: " + user.getUsername());

        String token = jwtUtil.generateToken(user.getUsername());

        // return JSON
        return ResponseEntity.ok(Map.of("token", token));
    }
}
