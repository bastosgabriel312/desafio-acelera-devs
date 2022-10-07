package com.stefanini.aceleraDevs.dto;

import com.stefanini.aceleraDevs.model.Turma;

public class TurmaDTO {
	private Long id;
	private String nome;

	public TurmaDTO() {

	}

	public TurmaDTO(Turma turma) {
		this.id = turma.getId();
		this.nome = turma.getNome();
	}

	public TurmaDTO(String nome) {
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
}
