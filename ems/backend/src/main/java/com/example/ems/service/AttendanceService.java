package com.example.ems.service;

import com.example.ems.entity.Attendance;
import java.util.List;

public interface AttendanceService {
    Attendance save(Attendance attendance);
    List<Attendance> getAll();
}
