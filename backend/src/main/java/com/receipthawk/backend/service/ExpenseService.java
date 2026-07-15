package com.receipthawk.backend.service;


import java.io.ByteArrayOutputStream;
import java.util.List;

import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.itextpdf.text.Document;
import com.itextpdf.text.Paragraph;
import com.itextpdf.text.pdf.PdfWriter;
import com.receipthawk.backend.dto.DashboardSummary;
import com.receipthawk.backend.dto.MonthlySummary;
import com.receipthawk.backend.entity.Expense;
import com.receipthawk.backend.repository.ExpenseRepository;

@Service
public class ExpenseService {

    @Autowired
    private ExpenseRepository expenseRepository;

    // Add Expense
    public Expense addExpense(Expense expense) {
        return expenseRepository.save(expense);
    }

    // Get All Expenses
    public List<Expense> getAllExpenses() {
        return expenseRepository.findAll();
    }

    // Search Expense
    public List<Expense> searchExpenses(String title) {
        return expenseRepository.findByTitleContainingIgnoreCase(title);
    }

    // Filter by Category
    public List<Expense> filterByCategory(String category) {
        return expenseRepository.findByCategory(category);
    }

    // Filter by Date
    public List<Expense> filterByDate(String date) {
        return expenseRepository.findByDate(date);
    }

    // Get Expense By Id
    public Expense getExpenseById(Long id) {
        return expenseRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Expense not found"));
    }

    // Delete Expense
    public void deleteExpense(Long id) {
        expenseRepository.deleteById(id);
    }

    // Update Expense
    public Expense updateExpense(Long id, Expense updatedExpense) {

        Expense expense = expenseRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Expense not found"));

        expense.setTitle(updatedExpense.getTitle());
        expense.setAmount(updatedExpense.getAmount());
        expense.setCategory(updatedExpense.getCategory());
        expense.setDate(updatedExpense.getDate());
        expense.setDescription(updatedExpense.getDescription());
        expense.setReceiptImage(updatedExpense.getReceiptImage());
        expense.setUserId(updatedExpense.getUserId());

        return expenseRepository.save(expense);
    }

    // Export Expenses to PDF
    public byte[] exportExpensesToPdf() {

        List<Expense> expenses = expenseRepository.findAll();

        try {

            Document document = new Document();
            ByteArrayOutputStream out = new ByteArrayOutputStream();

            PdfWriter.getInstance(document, out);
            document.open();

            document.add(new Paragraph("ReceiptHawk Expense Report"));
            document.add(new Paragraph(" "));

            for (Expense expense : expenses) {

                document.add(new Paragraph(
                        "Title: " + expense.getTitle()
                        + " | Amount: ₹" + expense.getAmount()
                        + " | Category: " + expense.getCategory()
                        + " | Date: " + expense.getDate()));

            }

            document.close();

            return out.toByteArray();

        } catch (Exception e) {
            throw new RuntimeException("Error while generating PDF", e);
        }
    }
    // Export Expenses to Excel
public byte[] exportExpensesToExcel() {

    List<Expense> expenses = expenseRepository.findAll();

    try (
        XSSFWorkbook workbook = new XSSFWorkbook();
        ByteArrayOutputStream out = new ByteArrayOutputStream()
    ) {

        Sheet sheet = workbook.createSheet("Expenses");

        // Header Row
        Row header = sheet.createRow(0);
        header.createCell(0).setCellValue("Title");
        header.createCell(1).setCellValue("Category");
        header.createCell(2).setCellValue("Amount");
        header.createCell(3).setCellValue("Date");

        // Data Rows
        int rowNum = 1;

        for (Expense expense : expenses) {

            Row row = sheet.createRow(rowNum++);

            row.createCell(0).setCellValue(expense.getTitle());
            row.createCell(1).setCellValue(expense.getCategory());
            row.createCell(2).setCellValue(expense.getAmount());
            row.createCell(3).setCellValue(expense.getDate());
        }

        workbook.write(out);

        return out.toByteArray();

    } catch (Exception e) {
        throw new RuntimeException("Error while generating Excel", e);
    }
}
// Dashboard Summary
public DashboardSummary getDashboardSummary() {

    List<Expense> expenses = expenseRepository.findAll();

    double totalExpenses = expenses.stream()
            .mapToDouble(Expense::getAmount)
            .sum();

    int totalTransactions = expenses.size();

    double highestExpense = expenses.stream()
            .mapToDouble(Expense::getAmount)
            .max()
            .orElse(0);

    double averageExpense = expenses.stream()
            .mapToDouble(Expense::getAmount)
            .average()
            .orElse(0);

    return new DashboardSummary(
            totalExpenses,
            totalTransactions,
            highestExpense,
            averageExpense
    );
}
// Monthly Expense Summary
public MonthlySummary getMonthlySummary(String month) {

    List<Expense> expenses = expenseRepository.findAll();

    double total = expenses.stream()
            .filter(expense -> expense.getDate() != null &&
                    expense.getDate().startsWith(month))
            .mapToDouble(Expense::getAmount)
            .sum();

    return new MonthlySummary(month, total);
}

}