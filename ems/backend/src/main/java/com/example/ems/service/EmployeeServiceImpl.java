package com.example.ems.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.ems.entity.Employee;
import com.example.ems.repository.EmployeeRepository;

@Service
public class EmployeeServiceImpl implements EmployeeService {

    private final EmployeeRepository repo;

    public EmployeeServiceImpl(EmployeeRepository repo) {
        this.repo = repo;
    }

    @Override
    public Employee save(Employee e) {
        return repo.save(e);
    }

    @Override
    public List<Employee> getAll() {
        return repo.findAll();   // ✅ SIMPLE LIST (NO PAGINATION)
    }

    @Override
    public Employee update(Long id, Employee e) {
        Employee emp = repo.findById(id).orElseThrow();
        emp.setName(e.getName());
        emp.setSalary(e.getSalary());
        return repo.save(emp);
    }

    @Override
    public void deleteById(Long id) {
        repo.deleteById(id);
    }
}
