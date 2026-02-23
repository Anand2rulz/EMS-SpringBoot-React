package com.example.ems.controller;

import com.example.ems.entity.Attendance;
import com.example.ems.service.AttendanceService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/attendance")
@CrossOrigin
public class AttendanceController {

    @Autowired
    private AttendanceService attendanceService;

    @PostMapping
    public Attendance save(@RequestBody Attendance attendance) {
        return attendanceService.save(attendance);
    }

    @GetMapping
    public List<Attendance> getAll() {
        return attendanceService.getAll();
    }
}
