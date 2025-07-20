package com.mikeapplications.mikebudgetapp.Controllers;

import java.net.URI;
import java.util.Set;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.mikeapplications.mikebudgetapp.Entities.Budget;
import com.mikeapplications.mikebudgetapp.Entities.User;
import com.mikeapplications.mikebudgetapp.Services.BudgetService;
import com.mikeapplications.mikebudgetapp.Services.UserService;

@RestController
public class BudgetServiceController {
    private final BudgetService budgetService;
    private final UserService userService;

    public BudgetServiceController(BudgetService budgetService, UserService userService) {
        this.budgetService = budgetService;
        this.userService = userService;
    }

    @PostMapping("/users/{userId}/budgets")
    public ResponseEntity<Void> createBudgetForUser(@PathVariable Long userId, @RequestBody Budget budget) {
        User foundUser = userService.findUserById(userId);
        budgetService.saveBudgetForUser(foundUser, budget);
        URI location = URI.create("/users/" + userId + "/budgets/" + budget.getId());
        return ResponseEntity.created(location).build();
    }

    @GetMapping("/users/{userId}/budgets")
    public ResponseEntity<Set<Budget>> getAllBudgetsById(@PathVariable long userId) {
        User foundUser = userService.findUserById(userId);
        return ResponseEntity.ok(foundUser.getBudgets());
    }

    @GetMapping("/users/{userId}/budgets/{budgetId}") 
    public ResponseEntity<Budget> getBudgetByItsId(@PathVariable long userId, @PathVariable long budgetId) {
        User foundUser = userService.findUserById(userId);
        Budget budget = foundUser.getBudgets().stream()
            .filter(budgets -> budgets.getId() == budgetId)
            .findFirst()
            .orElseThrow(() -> new RuntimeException("Budget not found for user"));
        return ResponseEntity.ok(budget);
    }

}
