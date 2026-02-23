package com.example.ems.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.ems.entity.Department;
import com.example.ems.repository.DepartmentRepository;

@Service
public class DepartmentServiceImpl implements DepartmentService {

    private final DepartmentRepository repo;

    // ✅ THIS CONSTRUCTOR IS IMPORTANT
    public DepartmentServiceImpl(DepartmentRepository repo) {
        this.repo = repo;
    }

    @Override
    public Department save(Department d) {
        return repo.save(d);
    }

    @Override
    public List<Department> getAll() {
        return repo.findAll();
    }

    @Override
    public Department getById(Long id) {
        return repo.findById(id)
                .orElseThrow(() -> new RuntimeException("Department not found"));
    }

    @Override
    public Department update(Long id, Department newDept) {
        Department d = getById(id);
        d.setName(newDept.getName());
        return repo.save(d);
    }

    @Override
    public void deleteById(Long id) {
        repo.deleteById(id);
    }
}
