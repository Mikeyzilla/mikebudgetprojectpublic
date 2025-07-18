package com.mikeapplications.mikebudgetapp.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mikeapplications.mikebudgetapp.Entities.Budget;

public interface BudgetRepository extends JpaRepository<Budget, Long> {
	
}
