package com.mikeapplications.mikebudgetapp.Entities;

import java.util.HashSet;
import java.util.Set;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    long id;

    @OneToMany(mappedBy = "user", cascade=CascadeType.ALL, orphanRemoval = true)
    private Set<Budget> budgets = new HashSet<>();

    @Column(nullable = false, unique = true)
    private String username;


    @Column(nullable = false)
    private String password;

    @Column(nullable = false)
    private int income = 0;

    @Column(nullable = false)
    private int dependents = 0;

    @Column(nullable = false)
    private String location = "Unknown";

    @Column(nullable = false)
    private String occupation = "Unemployed";

    public User() {
    }

    public User(String username, String password, int income, int dependents, String location, String occupation) {
        this.username = username;
        this.password = password;
        this.income = income;
        this.dependents = dependents;
        this.location = location;
        this.occupation = occupation;
    }

    public long getId() {
        return id;
    }

    public String getUsername() {
        return username;
    }

    public String getPassword() {
        return password;
    }

    public int getIncome() {
        return income;
    }

    public int getDependents() {
        return dependents;
    }

    public String getLocation() {
        return location;
    }

    public String getOccupation() {
        return occupation;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public void setIncome(int income) {
        this.income = income;
    }

    public void setDependents(int dependents) {
        this.dependents = dependents;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public void setOccupation(String occupation) {
        this.occupation = occupation;
    }

    public Set<Budget> getBudgets() {
        return budgets;
    }

    public void setBudgets(Set<Budget> budgets) {
        this.budgets = budgets;
    }

}
