package com.stefanini.aceleraDevs.controller.form;

import javax.validation.constraints.NotNull;

import com.stefanini.aceleraDevs.exception.CursoNotFoundException;
import com.stefanini.aceleraDevs.exception.DisciplinaNotFoundException;
import com.stefanini.aceleraDevs.exception.TurmaNotFoundException;
import com.stefanini.aceleraDevs.model.Curso;
import com.stefanini.aceleraDevs.model.Disciplina;
import com.stefanini.aceleraDevs.model.Turma;
import com.stefanini.aceleraDevs.service.CursoService;
import com.stefanini.aceleraDevs.service.DisciplinaService;
import com.stefanini.aceleraDevs.service.TurmaService;

public class DisciplinaForm {
	@NotNull
	private String nome;
	@NotNull
	private String codigo;
	@NotNull
	private String conteudoProgramatico;
	@NotNull
	private Integer numeroCreditos;
	@NotNull
	private Integer totalHoras;
	@NotNull
	private Long turma;
	@NotNull
	private Long curso;

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

	public Long getTurma() {
		return turma;
	}

	public void setTurma(Long turma) {
		this.turma = turma;
	}

	public Long getCurso() {
		return curso;
	}

	public void setCurso(Long curso) {
		this.curso = curso;
	}

	public Disciplina atualizar(Long id, DisciplinaService disciplinaService, CursoService cursoService,
			TurmaService turmaService)
			throws DisciplinaNotFoundException, CursoNotFoundException, TurmaNotFoundException {
		Disciplina disciplina = disciplinaService.findById(id);
		Curso cursoAntigo = disciplina.getCurso();
		Curso cursoAtual = cursoService.findById(this.curso);
		Turma turma = turmaService.findById(this.turma);
		disciplina.setCodigo(this.codigo);
		disciplina.setConteudoProgramatico(this.conteudoProgramatico);
		disciplina.setCurso(cursoAtual);
		disciplina.setTurma(turma);
		disciplina.setTotalHoras(this.totalHoras);
		disciplina.setNome(this.getNome());
		disciplina.setNumeroCreditos(this.numeroCreditos);
		disciplinaService.save(disciplina);
		// Atualiza as horas do curso antigo, caso a disciplina seja alterada de curso		
		Integer totalHorasCurso = disciplinaService.somaTotalHorasByCurso(cursoAntigo);
        cursoService.updateTotalHoras(totalHorasCurso, cursoAntigo);
		return disciplina;
	}

}
