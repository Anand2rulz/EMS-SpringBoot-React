package com.example.ems.dto;

public class LoginRequest {

    private String username;
    private String password;
    private String role;   // 👈 NEW

    public String getUsername() {
        return username;
    }

    public String getPassword() {
        return password;
    }

    public String getRole() {
        return role;
    }
}
