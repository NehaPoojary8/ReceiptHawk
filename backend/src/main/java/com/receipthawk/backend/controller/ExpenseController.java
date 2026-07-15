package com.receipthawk.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.receipthawk.backend.dto.DashboardSummary;
import com.receipthawk.backend.dto.MonthlySummary;
import com.receipthawk.backend.entity.Expense;
import com.receipthawk.backend.service.ExpenseService;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/expenses")
public class ExpenseController {

    @Autowired
    private ExpenseService expenseService;

    // Add Expense
    @PostMapping
    public Expense addExpense(@RequestBody Expense expense) {
        return expenseService.addExpense(expense);
    }

    // Get All Expenses
    @GetMapping
    public List<Expense> getAllExpenses() {
        return expenseService.getAllExpenses();
    }

    // Search Expenses
    @GetMapping("/search")
    public List<Expense> searchExpenses(@RequestParam String title) {
        return expenseService.searchExpenses(title);
    }
    // Filter By Category
@GetMapping("/category")
public List<Expense> filterByCategory(@RequestParam String category) {
    return expenseService.filterByCategory(category);
}

    // Get Expense By Id
    @GetMapping("/id/{id}")
    public Expense getExpenseById(@PathVariable Long id) {
        return expenseService.getExpenseById(id);
    }

    // Delete Expense
    @DeleteMapping("/{id}")
    public void deleteExpense(@PathVariable Long id) {
        expenseService.deleteExpense(id);
    }

    // Update Expense
    @PutMapping("/{id}")
    public Expense updateExpense(@PathVariable Long id,
                                 @RequestBody Expense expense) {
        return expenseService.updateExpense(id, expense);
    }
    // Export Expenses to PDF
@GetMapping("/export/pdf")
public ResponseEntity<byte[]> exportPdf() {

    byte[] pdf = expenseService.exportExpensesToPdf();

    return ResponseEntity.ok()
            .header(HttpHeaders.CONTENT_DISPOSITION,
                    "attachment; filename=ReceiptHawk_Expenses.pdf")
            .contentType(MediaType.APPLICATION_PDF)
            .body(pdf);
}
// Export Expenses to Excel
@GetMapping("/export/excel")
public ResponseEntity<byte[]> exportExcel() {

    byte[] excel = expenseService.exportExpensesToExcel();

    return ResponseEntity.ok()
            .header(HttpHeaders.CONTENT_DISPOSITION,
                    "attachment; filename=ReceiptHawk_Expenses.xlsx")
            .contentType(MediaType.parseMediaType(
                    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"))
            .body(excel);
}
// Dashboard Summary
@GetMapping("/dashboard-summary")
public DashboardSummary getDashboardSummary() {
    return expenseService.getDashboardSummary();
}
// Monthly Expense Summary
@GetMapping("/monthly-summary")
public MonthlySummary getMonthlySummary(@RequestParam String month) {
    return expenseService.getMonthlySummary(month);
}
// Filter By Date
@GetMapping("/date")
public List<Expense> filterByDate(@RequestParam String date) {
    return expenseService.filterByDate(date);
}
}