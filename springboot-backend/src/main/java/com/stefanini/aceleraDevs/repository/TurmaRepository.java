package com.stefanini.aceleraDevs.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;

import com.stefanini.aceleraDevs.model.Turma;

public interface TurmaRepository extends JpaRepository<Turma, Long> {
    
    List<Turma> findAllByEnabled(@Param("enabled") boolean enabled);
}
