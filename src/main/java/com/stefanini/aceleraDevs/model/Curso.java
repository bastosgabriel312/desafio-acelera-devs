package com.stefanini.aceleraDevs.model;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;

@Entity
@Data
@NoArgsConstructor
public class Curso {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    @OneToMany(mappedBy = "curso")
    private List<Disciplina> disciplinas;

    private Integer totalGrade;

    public Curso(Long id, String name, List<Disciplina> disciplinas, Integer totalGrade) {
        this.id = id;
        this.name = name;
        this.disciplinas = disciplinas;
        this.totalGrade = totalGrade;
    }
}
