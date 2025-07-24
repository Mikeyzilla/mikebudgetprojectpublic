package com.mikeapplications.mikebudgetapp.Services;

import java.time.LocalDate;
import java.time.temporal.WeekFields;
import java.util.List;
import java.util.Locale;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.mikeapplications.mikebudgetapp.Entities.Category;
import com.mikeapplications.mikebudgetapp.Entities.CategoryEntry;
import com.mikeapplications.mikebudgetapp.Repositories.CategoryEntryRepository;
import com.mikeapplications.mikebudgetapp.Repositories.CategoryRepository;

@Service
public class CategoryEntryService {
    private final CategoryRepository categoryRepository;

    public CategoryEntryService(CategoryRepository categoryRepository, CategoryEntryRepository categoryEntryRepository) {
        this.categoryRepository = categoryRepository;
    }

    public List<CategoryEntry> getEntriesForCategoryInPeriod(Long categoryId, LocalDate start, LocalDate end) {
        Category category = categoryRepository.findById(categoryId).orElseThrow(() -> new RuntimeException("no such category found with that id"));
        List<CategoryEntry> betweenDateEntryList = category.getEntries().stream().filter(entry -> !entry.getEntryDate().isBefore(start) && !entry.getEntryDate().isAfter(end)).collect(Collectors.toList());
        return betweenDateEntryList;
    }

    @SuppressWarnings("unused")
    private int getWeekOfMonth(LocalDate date) {
        return date.get(WeekFields.of(Locale.getDefault()).weekOfMonth());
    }
}
