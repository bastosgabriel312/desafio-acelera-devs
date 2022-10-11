package com.stefanini.aceleraDevs.controller.form;

import java.util.List;

import javax.validation.constraints.NotNull;

import com.stefanini.aceleraDevs.exception.CursoNotFoundException;
import com.stefanini.aceleraDevs.model.Curso;
import com.stefanini.aceleraDevs.model.Disciplina;
import com.stefanini.aceleraDevs.service.CursoService;

public class CursoForm {

	@NotNull
	private String name;
	@NotNull
	private Integer totalGrade;

	private List<Disciplina> disciplina;

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

	public List<Disciplina> getDisciplina() {
		return disciplina;
	}

	public void setDisciplina(List<Disciplina> disciplina) {
		this.disciplina = disciplina;
	}

	public Curso atualizar(Long id, CursoService cursoService) throws CursoNotFoundException {
		Curso curso = cursoService.findById(id);
		curso.setName(name);
		cursoService.save(curso);
		return curso;
	}
}
