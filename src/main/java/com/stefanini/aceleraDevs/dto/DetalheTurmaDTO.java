package com.stefanini.aceleraDevs.dto;

import java.util.List;

import com.stefanini.aceleraDevs.model.Aluno;
import com.stefanini.aceleraDevs.model.Disciplina;
import com.stefanini.aceleraDevs.model.Turma;

public class DetalheTurmaDTO {
	private Long id;
	private String nome;
	
	private List<Aluno> alunos;
	private List<Disciplina> disciplinas;
	
	public DetalheTurmaDTO() {

	}

	public DetalheTurmaDTO(Turma turma) {
		this.id = turma.getId();
		this.nome = turma.getNome();
		this.alunos = turma.getAlunos();
		this.disciplinas = turma.getDisciplinas();
	}

	public DetalheTurmaDTO(String nome) {
		this.nome = nome;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}
	
	public Long getId() {
		return id;
	}

	public List<Aluno> getAlunos() {
		return alunos;
	}

	public List<Disciplina> getDisciplinas() {
		return disciplinas;
	}
}
