package com.example.ems.service;

import java.util.List;

import com.example.ems.entity.Employee;

public interface EmployeeService {
    Employee save(Employee e);
    Employee update(Long id, Employee e);
    void deleteById(Long id);
    List<Employee> getAll();
}
