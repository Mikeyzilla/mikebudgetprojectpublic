package com.mikeapplications.mikebudgetapp.Services;

import java.util.Set;

import org.springframework.stereotype.Service;

import com.mikeapplications.mikebudgetapp.Entities.Budget;
import com.mikeapplications.mikebudgetapp.Entities.Category;
import com.mikeapplications.mikebudgetapp.Repositories.BudgetRepository;

@Service
public class CategoryService {
    private final BudgetRepository budgetRepository;

    public CategoryService(BudgetRepository budgetRepository) {
        this.budgetRepository = budgetRepository;
    }

    public Set<Category> getCategoriesForBudget(Long budgetId) {
        Budget budget = budgetRepository.findById(budgetId).orElseThrow(() -> new RuntimeException("Could not find a budget with that id"));
        return budget.getCategories();
    }

    public Category getCategoryById(Long budgetId, Long categoryId) {
        Budget budget = budgetRepository.findById(budgetId).orElseThrow(() -> new RuntimeException("Could not find a budget with that id"));
        return budget.getCategories().stream().filter(category -> category.getId() == categoryId).findFirst().orElseThrow(() -> new RuntimeException("Could not find a category within the budget that matches"));
    }
}
