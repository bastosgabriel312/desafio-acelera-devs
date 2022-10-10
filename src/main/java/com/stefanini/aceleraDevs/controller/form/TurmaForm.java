package com.stefanini.aceleraDevs.controller.form;

import javax.validation.constraints.NotNull;

import com.stefanini.aceleraDevs.exception.TurmaNotFoundException;
import com.stefanini.aceleraDevs.model.Turma;
import com.stefanini.aceleraDevs.service.TurmaService;

public class TurmaForm {
	@NotNull
	private String nome;
	@NotNull
	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}
	public Turma atualizar(Long id, TurmaService turmaService) throws TurmaNotFoundException {
		Turma turma = turmaService.findById(id);
		turma.setNome(this.nome);
		turmaService.save(turma);
		return turma;
	}
}
