package com.stefanini.aceleraDevs.dto;

import java.util.List;
import java.util.stream.Collectors;

import javax.validation.constraints.NotNull;

import com.stefanini.aceleraDevs.model.Curso;
import com.stefanini.aceleraDevs.model.Disciplina;
import com.stefanini.aceleraDevs.model.Turma;

public class DisciplinaDTO {
	
	private Long id;
	
	@NotNull
	private String nome;

	@NotNull
	private String codigo;

	@NotNull
	private String conteudoProgramatico;

	private Integer numeroCreditos = 0;

	private Integer totalHoras;

	private Turma turma;

	private Curso curso;

	public DisciplinaDTO() {

	}

	public DisciplinaDTO(Disciplina disciplina) {
		this.id = disciplina.getId();
		this.nome = disciplina.getNome();
		this.codigo = disciplina.getCodigo();
		this.conteudoProgramatico = disciplina.getConteudoProgramatico();
		this.numeroCreditos = disciplina.getNumeroCreditos();
		this.totalHoras = disciplina.getTotalHoras();
		this.curso = disciplina.getCurso();
		this.turma = disciplina.getTurma();
	}

	public DisciplinaDTO(String nome, String codigo, String conteudoProgramatico, Integer numeroCreditos,
			Integer totalHoras, Turma turma, Curso curso, Long id) {
		this.id = id;
		this.nome = nome;
		this.codigo = codigo;
		this.conteudoProgramatico = conteudoProgramatico;
		this.numeroCreditos = numeroCreditos;
		this.totalHoras = totalHoras;
		this.turma = turma;
		this.curso = curso;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getCodigo() {
		return codigo;
	}

	public void setCodigo(String codigo) {
		this.codigo = codigo;
	}

	public String getConteudoProgramatico() {
		return conteudoProgramatico;
	}

	public void setConteudoProgramatico(String conteudoProgramatico) {
		this.conteudoProgramatico = conteudoProgramatico;
	}

	public Integer getNumeroCreditos() {
		return numeroCreditos;
	}

	public void setNumeroCreditos(Integer numeroCreditos) {
		this.numeroCreditos = numeroCreditos;
	}

	public Integer getTotalHoras() {
		return totalHoras;
	}

	public void setTotalHoras(Integer totalHoras) {
		this.totalHoras = totalHoras;
	}

	public Turma getTurma() {
		return turma;
	}

	public void setTurma(Turma turma) {
		this.turma = turma;
	}

	public Curso getCurso() {
		return curso;
	}

	public void setCurso(Curso curso) {
		this.curso = curso;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public static List<DisciplinaDTO> converter(List<Disciplina> disciplinas) {
		return disciplinas.stream().map(DisciplinaDTO::new).collect(Collectors.toList());
	}

}
