package com.example.ems.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.ems.entity.Leave;
import com.example.ems.repository.LeaveRepository;

@Service
public class LeaveServiceImpl implements LeaveService {

    @Autowired
    private LeaveRepository repo;

    @Override
    public Leave save(Leave leave) {
        return repo.save(leave);
    }

    @Override
    public List<Leave> getAll() {
        return repo.findAll();
    }

    @Override
    public void delete(Long id) {
        repo.deleteById(id);
    }
}
