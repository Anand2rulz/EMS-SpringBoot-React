package com.example.ems.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.ems.entity.User;
import com.example.ems.repository.UserRepository;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository repo;

    @Override
    public User login(String username, String password) {

        System.out.println("=== INSIDE UserServiceImpl.login ===");
        System.out.println("Username: " + username);
        System.out.println("Password: " + password);

        User u = repo.findByUsername(username);

        if (u == null) {
            System.out.println("User NOT FOUND ❌");
            return null;
        }

        System.out.println("User FOUND ✅");
        System.out.println("DB Password: " + u.getPassword());

        // ✅ PLAIN PASSWORD CHECK
        if (u.getPassword().equals(password)) {
            System.out.println("PASSWORD MATCHED ✅");
            return u;
        }

        System.out.println("PASSWORD NOT MATCHED ❌");
        return null;
    }
}
