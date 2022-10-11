package com.stefanini.aceleraDevs.repository;

import com.stefanini.aceleraDevs.model.Aluno;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AlunoRepository extends JpaRepository<Aluno, Long> {
}
