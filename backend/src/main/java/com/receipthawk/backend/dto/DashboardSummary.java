package com.receipthawk.backend.dto;

public class DashboardSummary {

    private double totalExpenses;
    private int totalTransactions;
    private double highestExpense;
    private double averageExpense;

    public DashboardSummary() {
    }

    public DashboardSummary(double totalExpenses,
                            int totalTransactions,
                            double highestExpense,
                            double averageExpense) {
        this.totalExpenses = totalExpenses;
        this.totalTransactions = totalTransactions;
        this.highestExpense = highestExpense;
        this.averageExpense = averageExpense;
    }

    public double getTotalExpenses() {
        return totalExpenses;
    }

    public void setTotalExpenses(double totalExpenses) {
        this.totalExpenses = totalExpenses;
    }

    public int getTotalTransactions() {
        return totalTransactions;
    }

    public void setTotalTransactions(int totalTransactions) {
        this.totalTransactions = totalTransactions;
    }

    public double getHighestExpense() {
        return highestExpense;
    }

    public void setHighestExpense(double highestExpense) {
        this.highestExpense = highestExpense;
    }

    public double getAverageExpense() {
        return averageExpense;
    }

    public void setAverageExpense(double averageExpense) {
        this.averageExpense = averageExpense;
    }
}