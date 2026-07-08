package com.receipthawk.backend.dto;

public class MonthlySummary {

    private String month;
    private double totalExpenses;

    public MonthlySummary() {
    }

    public MonthlySummary(String month, double totalExpenses) {
        this.month = month;
        this.totalExpenses = totalExpenses;
    }

    public String getMonth() {
        return month;
    }

    public void setMonth(String month) {
        this.month = month;
    }

    public double getTotalExpenses() {
        return totalExpenses;
    }

    public void setTotalExpenses(double totalExpenses) {
        this.totalExpenses = totalExpenses;
    }
}