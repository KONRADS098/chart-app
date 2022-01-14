package github.chartapp.models;

import java.sql.Timestamp;

public class Data {
    private int id;
    private double score;
    private Timestamp submitDate;

    public Data() {

    }

    public Data(int id, double score, Timestamp submitDate) {
        this.id = id;
        this.score = score;
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

    public Timestamp getSubmitDate() {
        return submitDate;
    }

    public void setSubmitDate(Timestamp submitDate) {
        this.submitDate = submitDate;
    }
}
