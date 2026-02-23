package com.example.ems.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.ems.entity.Leave;

public interface LeaveRepository extends JpaRepository<Leave, Long> {

    @Query("SELECT l FROM Leave l WHERE CURRENT_DATE BETWEEN l.startDate AND l.endDate")
    List<Leave> findActiveLeaves();
}
