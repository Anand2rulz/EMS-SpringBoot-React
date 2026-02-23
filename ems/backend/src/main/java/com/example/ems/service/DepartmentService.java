package com.example.ems.service;

import java.util.List;

import com.example.ems.entity.Department;

public interface DepartmentService {

    Department save(Department d);

    List<Department> getAll();

    Department getById(Long id);

    Department update(Long id, Department d);

    void deleteById(Long id);
}
