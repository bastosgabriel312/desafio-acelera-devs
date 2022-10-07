package com.stefanini.aceleraDevs.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Data
@NoArgsConstructor
public class Disciplina {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String nome;

    @Column(nullable = false)
    private String codigo;

    @Column(nullable = false)
    private String conteudoProgramatico;

    @Column(nullable = false)
    private Integer numeroCreditos = 0;

    private Integer totalHoras;

    @ManyToOne
    @JsonIgnore
    @JoinColumn(name = "turma_id")
    private Turma turma;

    @ManyToOne
    @JsonIgnore
    @JoinColumn(name = "curso_id")
    private Curso curso;

    public Disciplina(Long id, String nome, String codigo, String conteudoProgramatico, Integer numeroCreditos, Integer totalHoras, Turma turma, Curso curso) {
        this.id = id;
        this.nome = nome;
        this.codigo = codigo;
        this.conteudoProgramatico = conteudoProgramatico;
        this.numeroCreditos = numeroCreditos;
        this.totalHoras = totalHoras;
        this.turma = turma;
        this.curso = curso;
    }
}
