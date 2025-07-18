package com.mikeapplications.mikebudgetapp.Services;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.temporal.WeekFields;
import java.util.Locale;

import org.springframework.stereotype.Service;

import com.mikeapplications.mikebudgetapp.Entities.CategoryEntry;
import com.mikeapplications.mikebudgetapp.Repositories.CategoryRepository;

@Service
public class CategoryEntryService {
    private final CategoryRepository categoryRepository;

    public CategoryEntryService(CategoryRepository categoryRepository) {
        this.categoryRepository = categoryRepository;
    }

    public CategoryEntry addEntryToCategory(Long categoryId, BigDecimal amount, LocalDateTime date) {
        
    }

    public List<CategoryEntry> getEntriesForCategoryInPeriod(Long categoryId, LocalDateTime start, LocalDateTime end) {

    }

    public void updateEntryAmount(Long entryId) {

    }

    public void deleteEntry(Long entryId) {
        categoryRepository.deleteById(entryId);
    }

    private int getWeekOfMonth(LocalDate date) {
        return date.get(WeekFields.of(Locale.getDefault()).weekOfMonth());
    }
}
