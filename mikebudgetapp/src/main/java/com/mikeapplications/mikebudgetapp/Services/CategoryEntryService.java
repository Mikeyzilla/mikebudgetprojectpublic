package com.mikeapplications.mikebudgetapp.Services;

import java.math.BigDecimal;
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
    private final CategoryEntryRepository categoryEntryRepository;

    public CategoryEntryService(CategoryRepository categoryRepository, CategoryEntryRepository categoryEntryRepository) {
        this.categoryRepository = categoryRepository;
        this.categoryEntryRepository = categoryEntryRepository;
    }

    public Category addEntryToCategory(Long categoryId, BigDecimal amount, LocalDate date) {
        Category category = categoryRepository.findById(categoryId).orElseThrow(() -> new RuntimeException("no such category found with that id"));
        CategoryEntry categoryEntry = new CategoryEntry();
        categoryEntry.setAmount(amount);
        categoryEntry.setEntryDate(date);
        categoryEntry.setCategory(category);
        category.getEntries().add(categoryEntry);
        return categoryRepository.save(category);
    }

    public List<CategoryEntry> getEntriesForCategoryInPeriod(Long categoryId, LocalDate start, LocalDate end) {
        Category category = categoryRepository.findById(categoryId).orElseThrow(() -> new RuntimeException("no such category found with that id"));
        List<CategoryEntry> betweenDateEntryList = category.getEntries().stream().filter(entry -> !entry.getEntryDate().isBefore(start) && !entry.getEntryDate().isAfter(end)).collect(Collectors.toList());
        return betweenDateEntryList;
    }

    public void updateEntryAmount(Long categoryId, Long entryId, BigDecimal amount) {
        Category category = categoryRepository.findById(categoryId).orElseThrow(() -> new RuntimeException("no such category found with that id"));
        CategoryEntry entryToUpdate = category.getEntries().stream().filter(entry -> entry.getId() == entryId).findFirst().orElseThrow(() -> new RuntimeException("no such entry found with that id"));
        entryToUpdate.setAmount(amount);
        categoryRepository.save(category);
    }

    public void deleteEntry(Long entryId) {
        categoryEntryRepository.deleteById(entryId);
    }

    @SuppressWarnings("unused")
    private int getWeekOfMonth(LocalDate date) {
        return date.get(WeekFields.of(Locale.getDefault()).weekOfMonth());
    }
}
