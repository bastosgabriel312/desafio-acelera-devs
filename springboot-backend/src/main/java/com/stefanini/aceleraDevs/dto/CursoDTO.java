package com.stefanini.aceleraDevs.dto;

import java.util.List;
import java.util.stream.Collectors;

import javax.validation.constraints.NotNull;

import com.stefanini.aceleraDevs.model.Curso;

public class CursoDTO {
	
	private Long id;
	
	@NotNull
    private String name;
	@NotNull
    private Integer totalGrade;


    public CursoDTO() {
    }

    public CursoDTO(String name, Integer totalGrade,Long id) {
        this.name = name;
        this.totalGrade = totalGrade;
        this.id = id;
    }

    public CursoDTO(Curso curso) {
    	this.id = curso.getId();
    	this.name = curso.getName();
        this.totalGrade = curso.getTotalGrade();
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
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

	public static List<CursoDTO> converter(List<Curso> cursos) {
		return cursos.stream().map(CursoDTO::new).collect(Collectors.toList());
	}
}
