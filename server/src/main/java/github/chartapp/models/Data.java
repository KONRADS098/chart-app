package github.chartapp.models;

import java.time.LocalDate;

public class Data {
    private int id;
    private double score;
    private String name;
    private LocalDate submitDate;

    public Data(int id, double score, String name,LocalDate submitDate) {
        this.id = id;
        this.score = score;
        this.name = name;
        this.submitDate = submitDate;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public double getScore() {
        return score;
    }

    public void setScore(double score) {
        this.score = score;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public LocalDate getSubmitDate() {
        return submitDate;
    }

    public void setSubmitDate(LocalDate submitDate) {
        this.submitDate = submitDate;
    }
}
