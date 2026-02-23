package com.example.ems.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.ems.entity.User;

public interface UserRepository extends JpaRepository<User, Long> {
    User findByUsername(String username);
}
