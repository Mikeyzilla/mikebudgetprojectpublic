package com.mikeapplications.mikebudgetapp.Services;

import java.util.Set;

import org.springframework.stereotype.Service;

import com.mikeapplications.mikebudgetapp.Entities.Budget;
import com.mikeapplications.mikebudgetapp.Entities.User;
import com.mikeapplications.mikebudgetapp.Repositories.BudgetRepository;
import com.mikeapplications.mikebudgetapp.Repositories.UserRepository;

@Service
public class BudgetService {

    @SuppressWarnings("unused")
    private final BudgetRepository budgetRepository;
    private final UserRepository userRepository;

    public BudgetService(BudgetRepository budgetRepository, UserRepository userRepository) {
        this.budgetRepository = budgetRepository;
        this.userRepository = userRepository;
    }

    public Set<Budget> saveBudgetForUser(User user, Budget budget) {
        Set<Budget> currentBudgets = user.getBudgets();
        currentBudgets.add(budget);
        budget.setUser(user);
        userRepository.save(user);
        return currentBudgets;
    }

    public Set<Budget> getBudgetsForUser(Long userId) {
        User user = userRepository.findById(userId).orElseThrow(() -> new RuntimeException("User not found"));
        return user.getBudgets();
    }

    public Budget getBudgetById(Long userId, Long budgetId) {
        User user = userRepository.findById(userId).orElseThrow(() -> new RuntimeException("User not found"));
        return user.getBudgets().stream().filter(budget -> budget.getId() == budgetId).findFirst().orElseThrow(() -> new RuntimeException("Could not find a budget associated with that user"));
    }
}
