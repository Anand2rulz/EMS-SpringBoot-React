package com.example.ems.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.ems.entity.Leave;
import com.example.ems.service.LeaveService;

@RestController
@RequestMapping("/leaves")
@CrossOrigin
public class LeaveController {

    @Autowired
    private LeaveService leaveService;

    @PostMapping
    public Leave save(@RequestBody Leave leave) {
        return leaveService.save(leave);
    }

    @GetMapping
    public List<Leave> getAll() {
        return leaveService.getAll();
    }

    @DeleteMapping("/{id}")
    public String delete(@PathVariable Long id) {
        leaveService.delete(id);
        return "Deleted";
    }
}
