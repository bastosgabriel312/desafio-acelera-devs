package com.stefanini.aceleraDevs.repository;

import com.stefanini.aceleraDevs.model.Curso;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CursoRepository extends JpaRepository <Curso, Long> {
}
