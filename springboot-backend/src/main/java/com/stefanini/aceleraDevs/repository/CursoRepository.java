package com.stefanini.aceleraDevs.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;

import com.stefanini.aceleraDevs.model.Curso;

public interface CursoRepository extends JpaRepository <Curso, Long> {
    
    List<Curso> findAllByEnabled(@Param("enabled") boolean enabled);
}

