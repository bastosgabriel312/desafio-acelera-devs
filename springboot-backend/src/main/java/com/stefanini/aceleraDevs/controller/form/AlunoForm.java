package com.stefanini.aceleraDevs.controller.form;

import javax.validation.constraints.NotNull;

import com.stefanini.aceleraDevs.dto.AlunoDTO;
import com.stefanini.aceleraDevs.model.Aluno;
import com.stefanini.aceleraDevs.model.Curso;
import com.stefanini.aceleraDevs.model.DadosPessoais;
import com.stefanini.aceleraDevs.model.Endereco;
import com.stefanini.aceleraDevs.model.Turma;
import com.stefanini.aceleraDevs.service.AlunoService;
import com.stefanini.aceleraDevs.service.CursoService;
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
	private String telefone;
	@NotNull
	private String rg;
	@NotNull
    private Long idTurma;
	@NotNull
	private Long idCurso;
	@NotNull
	private Endereco endereco;
	
	
	public String getNome() {
		return nome;
	}


	public String getMatricula() {
		return matricula;
	}


	public String getCpf() {
		return cpf;
	}


	public String getEmail() {
		return email;
	}


	public String getTelefone() {
		return telefone;
	}


	public String getRg() {
		return rg;
	}


	public Long getIdTurma() {
		return idTurma;
	}


	public Long getIdCurso() {
        return idCurso;
    }


    public Endereco getEndereco() {
		return endereco;
	}


	public Aluno atualizar(Long id, AlunoService alunoService, TurmaService turmaService, CursoService cursoService) throws Exception {
		Aluno aluno = alunoService.findById(id);
		DadosPessoais dadosPessoais = aluno.getDadosPessoais();
		Turma turma = turmaService.findById(idTurma);
		Curso curso = cursoService.findById(idCurso);
		aluno.setNome(this.nome);
        dadosPessoais.setCpf(this.cpf);
        dadosPessoais.setEmail(this.email);
        dadosPessoais.setRg(rg);
        dadosPessoais.setTelefone(telefone);
        dadosPessoais.setEndereco(endereco);
        aluno.setDadosPessoais(dadosPessoais);
        aluno.setMatricula(this.matricula);
        
        aluno.setTurma(turma);
        
        aluno.setCurso(curso);
        
		if (!AlunoDTO.isValidDadosPessoais(aluno)) {
		    throw new Exception("Dados pessoais inválidos.");
		}
        if (!(alunoService.disciplinasInCurso(aluno))) {
            throw new Exception("As disciplinas da turma do aluno não condizem com as disciplinas do curso.");
        }
        alunoService.save(aluno);
		return aluno;
	}
	
	
}
