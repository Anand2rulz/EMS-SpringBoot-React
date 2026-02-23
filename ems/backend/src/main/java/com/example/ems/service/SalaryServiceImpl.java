package com.example.ems.service;

import com.example.ems.entity.Salary;
import com.example.ems.repository.SalaryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class SalaryServiceImpl implements SalaryService {

    @Autowired
    private SalaryRepository salaryRepository;

    @Override
    public Salary save(Salary salary) {
        return salaryRepository.save(salary);
    }

    @Override
    public List<Salary> getAll() {
        return salaryRepository.findAll();
    }
}
