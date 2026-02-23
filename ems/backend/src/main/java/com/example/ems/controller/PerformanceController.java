package com.example.ems.controller;

import java.time.LocalDate;
import java.util.List;

import org.springframework.web.bind.annotation.*;

import com.example.ems.entity.Attendance;
import com.example.ems.repository.AttendanceRepository;

@RestController
@RequestMapping("/api/analytics")
@CrossOrigin(origins = "http://localhost:3000")
public class PerformanceController {

    private final AttendanceRepository attendanceRepo;

    public PerformanceController(AttendanceRepository attendanceRepo) {
        this.attendanceRepo = attendanceRepo;
    }

    @GetMapping("/employee/{id}")
    public List<Attendance> getMonthlyPerformance(
            @PathVariable Long id,
            @RequestParam int year,
            @RequestParam int month) {

        LocalDate start = LocalDate.of(year, month, 1);
        LocalDate end = start.withDayOfMonth(start.lengthOfMonth());

        return attendanceRepo.findByEmployeeIdAndDateBetween(id, start, end);
    }
}
