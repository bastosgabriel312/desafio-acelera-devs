package com.stefanini.aceleraDevs.model;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import lombok.Data;
import lombok.NoArgsConstructor;

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

    private Integer totalGrade = 0;
    
    private boolean enabled = true;

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
    
    public void addAluno(Aluno aluno) {
        this.alunos.add(aluno);
    }

    public boolean isEnabled() {
        return enabled;
    }

    public void setEnabled(boolean enabled) {
        this.enabled = enabled;
    }
}
