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
    
    @OneToMany(mappedBy = "curso")
    private List<Aluno> alunos;

    private Integer totalGrade;

    public Curso() {
    	
    }
    
    public Curso(Long id, String name, List<Disciplina> disciplinas, Integer totalGrade,List<Aluno> alunos) {
        this.id = id;
        this.name = name;
        this.disciplinas = disciplinas;
        this.totalGrade = totalGrade;
        this.alunos = alunos;
    }

	public Long getId() {
		return id;
	}

	public String getName() {
		return name;
	}

	public List<Disciplina> getDisciplinas() {
		System.out.println("ABC" + disciplinas);
		return disciplinas;
	}

	public Integer getTotalGrade() {
		return totalGrade;
	}

	public void setName(String name) {
		this.name = name;
	}

	public void setDisciplinas(List<Disciplina> disciplinas) {
		this.disciplinas = disciplinas;
	}

	public void setTotalGrade(Integer totalGrade) {
		this.totalGrade = totalGrade;
	}

    public List<Aluno> getAlunos() {
        return alunos;
    }

    public void setAlunos(List<Aluno> alunos) {
        this.alunos = alunos;
    }
}
