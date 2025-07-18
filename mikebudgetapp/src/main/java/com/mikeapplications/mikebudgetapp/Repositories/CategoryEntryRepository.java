package com.mikeapplications.mikebudgetapp.Repositories;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mikeapplications.mikebudgetapp.Entities.Category;
import com.mikeapplications.mikebudgetapp.Entities.CategoryEntry;

public interface CategoryEntryRepository extends JpaRepository<CategoryEntry, Long> {

    List<CategoryEntry> findByCategoryAndDateBetween(Category category, LocalDateTime start, LocalDateTime end);

}
