package com.mikeapplications.mikebudgetapp.Controllers;

import java.util.Set;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.mikeapplications.mikebudgetapp.Entities.Category;
import com.mikeapplications.mikebudgetapp.Services.CategoryService;

@RestController
public class CategoryServiceController {
    private final CategoryService categoryService;

    public CategoryServiceController(CategoryService categoryService) {
        this.categoryService = categoryService;
    }

    @GetMapping("/budgets/{budgetId}/categories")
    public ResponseEntity<Set<Category>> getAllCategoriesById(@PathVariable long budgetId) {
        Set<Category> categories = categoryService.getCategoriesForBudget(budgetId);
        return ResponseEntity.ok(categories);
    }

    @GetMapping("/budgets/{budgetId}/categories/{categoryId}")
    public ResponseEntity<Category> getCategoryById(@PathVariable long budgetId, @PathVariable long categoryId) {
        Set<Category> categories = categoryService.getCategoriesForBudget(budgetId);
        Category foundCategory = categories.stream().filter(c-> c.getId() == categoryId).findFirst().orElseThrow(() -> new RuntimeException("No such category found with that id"));
        return ResponseEntity.ok(foundCategory);
    }

}
