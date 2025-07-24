package com.mikeapplications.mikebudgetapp.Controllers;

import java.time.LocalDate;
import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.mikeapplications.mikebudgetapp.Entities.CategoryEntry;
import com.mikeapplications.mikebudgetapp.Services.CategoryEntryService;

@RestController
public class CategoryEntryServiceController {
    private final CategoryEntryService categoryEntryService;

    public CategoryEntryServiceController(CategoryEntryService categoryEntryService) {
        this.categoryEntryService = categoryEntryService;
    }

    /*@PostMapping("/categories/{categoryId}/entries")
    public ResponseEntity<Void> addEntry( @PathVariable long categoryId, @RequestBody CategoryEntry categoryEntry) {
        categoryEntryService.addEntryToCategory(categoryId, categoryEntry.getAmount(), categoryEntry.getEntryDate());
        return new ResponseEntity<>(HttpStatus.CREATED);
    }*/

    @GetMapping("/categories/{categoryId}/entries")
    public ResponseEntity<List<CategoryEntry>> getEntriesWithinRange(@PathVariable long categoryId, @RequestParam LocalDate start, @RequestParam LocalDate end) {
        List<CategoryEntry> entries = categoryEntryService.getEntriesForCategoryInPeriod(categoryId, start, end);
        return ResponseEntity.ok(entries);
    }
    /* 
    @PutMapping("/categories/{categoryId}/entries/{entryId}")
    public ResponseEntity<Void> updateEntry(@PathVariable long categoryId, @PathVariable long entryId, @RequestBody CategoryEntry categoryEntry) {
        categoryEntryService.updateEntryAmount(categoryId, entryId, categoryEntry.getAmount());
        return ResponseEntity.noContent().build();
    }

    @DeleteMapping("/entries/{entryId}")
    public ResponseEntity<Void> deleteEntry(@PathVariable long entryId) {
        categoryEntryService.deleteEntry(entryId);
        return ResponseEntity.noContent().build();
    } */

}