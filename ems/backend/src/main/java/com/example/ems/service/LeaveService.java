package com.example.ems.service;

import java.util.List;

import com.example.ems.entity.Leave;

public interface LeaveService {

    Leave save(Leave leave);

    List<Leave> getAll();

    void delete(Long id);
}
