package com.stefanini.aceleraDevs.dto;

public class CursoDTO {
    private String name;

    private Integer totalGrade;

    public CursoDTO() {
    }

    public CursoDTO(String name, Integer totalGrade) {
        this.name = name;
        this.totalGrade = totalGrade;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Integer getTotalGrade() {
        return totalGrade;
    }

    public void setTotalGrade(Integer totalGrade) {
        this.totalGrade = totalGrade;
    }
}
