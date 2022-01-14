package github.chartapp.models;

import java.time.LocalDate;

public class Data {
    private int id;
    private double score;
    private String groupName;
    private LocalDate submitDate;

    public Data(int id, double score, String groupName,LocalDate submitDate) {
        this.id = id;
        this.score = score;
        this.groupName = groupName;
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

    public String getGroupName() {
        return groupName;
    }

    public void setGroupName(String groupName) {
        this.groupName = groupName;
    }

    public LocalDate getSubmitDate() {
        return submitDate;
    }

    public void setSubmitDate(LocalDate submitDate) {
        this.submitDate = submitDate;
    }
}
