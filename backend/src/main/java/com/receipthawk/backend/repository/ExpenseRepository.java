package com.receipthawk.backend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.receipthawk.backend.entity.Expense;

@Repository
public interface ExpenseRepository extends JpaRepository<Expense, Long> {

    List<Expense> findByTitleContainingIgnoreCase(String title);
    List<Expense> findByCategory(String category);
    List<Expense> findByDate(String date);
   
}