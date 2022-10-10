package com.stefanini.aceleraDevs.controller.form;

import javax.validation.constraints.NotNull;

import com.stefanini.aceleraDevs.exception.AlunoNotFoundException;
import com.stefanini.aceleraDevs.exception.TurmaNotFoundException;
import com.stefanini.aceleraDevs.model.Aluno;
import com.stefanini.aceleraDevs.model.DadosPessoais;
import com.stefanini.aceleraDevs.model.Turma;
import com.stefanini.aceleraDevs.service.AlunoService;
import com.stefanini.aceleraDevs.service.TurmaService;

public class AlunoForm {
	@NotNull
    private String nome;
	@NotNull
    private String matricula;
	@NotNull
    private String cpf;
	@NotNull
    private String email;
	@NotNull
    private Long idTurma;
	
	
	public Aluno atualizar(Long id, AlunoService alunoService, TurmaService turmaService) throws AlunoNotFoundException, TurmaNotFoundException {
		Aluno aluno = alunoService.findById(id);
		DadosPessoais dadosPessoais = aluno.getDadosPessoais();
		Turma turma = turmaService.findById(idTurma);
		aluno.setNome(this.nome);
		dadosPessoais.setCpf(this.cpf);
		dadosPessoais.setEmail(this.email);
		aluno.setDadosPessoais(dadosPessoais);
		aluno.setMatricula(this.matricula);
		aluno.setTurma(turma);
		alunoService.save(aluno);
		return aluno;
	}
	
	
}
