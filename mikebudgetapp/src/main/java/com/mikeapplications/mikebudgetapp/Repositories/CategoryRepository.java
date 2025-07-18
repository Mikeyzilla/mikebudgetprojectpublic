package com.mikeapplications.mikebudgetapp.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mikeapplications.mikebudgetapp.Entities.Category;

public interface CategoryRepository extends JpaRepository<Category, Long> {
	
}
