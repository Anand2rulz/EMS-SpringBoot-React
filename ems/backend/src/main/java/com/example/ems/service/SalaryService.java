package com.example.ems.service;

import com.example.ems.entity.Salary;
import java.util.List;

public interface SalaryService {
    Salary save(Salary salary);
    List<Salary> getAll();
}
