package com.stefanini.aceleraDevs.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.stefanini.aceleraDevs.model.Curso;
import com.stefanini.aceleraDevs.model.Disciplina;

public interface DisciplinaRepository extends JpaRepository <Disciplina, Long> {

	@Query("SELECT SUM(d.totalHoras) FROM Disciplina d WHERE d.curso = :curso")
	public Integer findTotalHorasByCurso(@Param(value = "curso") Curso curso);
}
