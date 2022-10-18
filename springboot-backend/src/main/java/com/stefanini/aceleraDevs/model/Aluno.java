package com.stefanini.aceleraDevs.model;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.Data;
import lombok.NoArgsConstructor;


@NoArgsConstructor
@Entity
@Data
public class Aluno {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String nome;

    @Column(nullable = false)
    private String matricula;

    @OneToOne(cascade = CascadeType.PERSIST)
    private DadosPessoais dadosPessoais;

    @ManyToOne
    @JsonIgnore
    @JoinColumn(name = "turma_id")
    private Turma turma;
    
    @ManyToOne
    @JsonIgnore
    @JoinColumn(name = "curso_id")
    private Curso curso;
    

    public Aluno() {
    	
    }
    public Aluno(Long id, String nome, String matricula, DadosPessoais dadosPessoais, Turma turma, Curso curso) {
        this.id = id;
        this.nome = nome;
        this.matricula = matricula;
        this.dadosPessoais = dadosPessoais;
        this.turma = turma;
        this.curso = curso;
    }

	public Long getId() {
		return id;
	}

	public String getNome() {
		return nome;
	}

	public String getMatricula() {
		return matricula;
	}

	public DadosPessoais getDadosPessoais() {
		return dadosPessoais;
	}

	public Turma getTurma() {
		return turma;
	}
	public void setNome(String nome) {
		this.nome = nome;
	}
	public void setMatricula(String matricula) {
		this.matricula = matricula;
	}
	public void setDadosPessoais(DadosPessoais dadosPessoais) {
		this.dadosPessoais = dadosPessoais;
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
}
