package com.example.ems.service;

import com.example.ems.entity.User;

public interface UserService {
    User login(String username, String password);
}
