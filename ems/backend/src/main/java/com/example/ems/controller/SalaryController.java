package com.example.ems.controller;

import com.example.ems.entity.Salary;
import com.example.ems.service.SalaryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/salary")
@CrossOrigin
public class SalaryController {

    @Autowired
    private SalaryService salaryService;

    @PostMapping
    public Salary save(@RequestBody Salary salary) {
        return salaryService.save(salary);
    }

    @GetMapping
    public List<Salary> getAll() {
        return salaryService.getAll();
    }
}
