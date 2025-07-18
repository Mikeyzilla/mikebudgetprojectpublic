package com.mikeapplications.mikebudgetapp.Entities;

import java.time.LocalDateTime;
import java.util.HashSet;
import java.util.Set;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.PrePersist;

@Entity
public class Budget {
    @Column(nullable = false, unique = true)
    @Id
    private long id;

    @OneToMany(mappedBy = "budget", cascade = CascadeType.ALL, orphanRemoval = true)
    private final Set<Category> categories = new HashSet<>();

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    private int totalIncome;
    @Column(nullable = false, name = "created_at")
    private LocalDateTime createdAt;

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public int getTotalIncome() {
        return totalIncome;
    }

    public long getId() {
        return id;
    }

    public Set<Category> getCategories() {
        return categories;
    }

    @PrePersist 
    protected void onCreate() {
        createdAt = LocalDateTime.now();
    }

    public void setUser(User user) {
        this.user = user;
    }

    public User getUser() {
        return user;
    }
}   
