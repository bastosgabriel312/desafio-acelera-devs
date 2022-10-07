package com.stefanini.aceleraDevs.config;

import com.stefanini.aceleraDevs.model.*;
import com.stefanini.aceleraDevs.repository.*;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;

import java.util.ArrayList;

@Configuration
@Profile("test")
public class TestConfiguration {

    @Bean
    CommandLineRunner commandLineRunner(AlunoRepository alunoRepository,
                                        CursoRepository cursoRepository,
                                        DadosPessoaisRepository dadosPessoaisRepository,
                                        DisciplinaRepository disciplinaRepository,
                                        TurmaRepository turmaRepository) {
        return args -> {
            Turma turma = new Turma();
            turmaRepository.save(turma);
            DadosPessoais dadosPessoais = new DadosPessoais(null,
                    "156-456-41",
                    "joao@gmail.com");
            Aluno joao = new Aluno(null,
                    "Joao",
                    "1234567",
                   dadosPessoais,
                    turma
            );
            alunoRepository.save(joao);
            Curso curso = new Curso(null, "medicina",
                    new ArrayList<Disciplina>(),
                    370);
            cursoRepository.save(curso);
            Disciplina disciplina = new Disciplina(null,
                    "Disciplina1",
                    "A045cod",
                    "xxxxxxxxxxxxxxxxxxxxxx",
                    15,
                    80,
                    turma,
                    curso);
            disciplinaRepository.save(disciplina);
        };
    }

}
