package com.stefanini.aceleraDevs.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.stefanini.aceleraDevs.model.Curso;

public interface CursoRepository extends JpaRepository <Curso, Long> {
}

