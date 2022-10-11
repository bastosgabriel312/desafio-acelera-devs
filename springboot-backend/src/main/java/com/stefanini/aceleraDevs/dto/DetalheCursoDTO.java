package com.stefanini.aceleraDevs.dto;

import java.util.List;
import java.util.stream.Collectors;

import javax.validation.constraints.NotNull;

import com.stefanini.aceleraDevs.model.Curso;
import com.stefanini.aceleraDevs.model.Disciplina;

public class DetalheCursoDTO {
	
	private Long id;
	
	@NotNull
    private String name;

    private Integer totalGrade;
    
    private List<Disciplina> disciplinas;

    public DetalheCursoDTO() {
    }

    public DetalheCursoDTO(String name, Integer totalGrade, List<Disciplina> disciplinas,Long id) {
        this.name = name;
        this.totalGrade = totalGrade;
        this.disciplinas = disciplinas;
        this.id = id;
    }

    public DetalheCursoDTO(Curso curso) {
    	this.id = curso.getId();
    	this.name = curso.getName();
        this.totalGrade = curso.getTotalGrade();
        this.disciplinas = curso.getDisciplinas();
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

	public List<Disciplina> getDisciplinas() {
		return disciplinas;
	}

	public void setDisciplinas(List<Disciplina> disciplinas) {
		this.disciplinas = disciplinas;
	}

	public static List<DetalheCursoDTO> converter(List<Curso> cursos) {
		return cursos.stream().map(DetalheCursoDTO::new).collect(Collectors.toList());
	}
}
