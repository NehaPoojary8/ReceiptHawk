package com.receipthawk.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.receipthawk.backend.entity.Expense;

@Repository
public interface ExpenseRepository extends JpaRepository<Expense, Long> {

}