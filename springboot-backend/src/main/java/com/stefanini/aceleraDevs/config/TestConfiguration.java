package com.stefanini.aceleraDevs.config;

import java.util.ArrayList;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;

import com.stefanini.aceleraDevs.model.Aluno;
import com.stefanini.aceleraDevs.model.Curso;
import com.stefanini.aceleraDevs.model.DadosPessoais;
import com.stefanini.aceleraDevs.model.Disciplina;
import com.stefanini.aceleraDevs.model.Endereco;
import com.stefanini.aceleraDevs.model.Turma;
import com.stefanini.aceleraDevs.repository.AlunoRepository;
import com.stefanini.aceleraDevs.repository.CursoRepository;
import com.stefanini.aceleraDevs.repository.DadosPessoaisRepository;
import com.stefanini.aceleraDevs.repository.DisciplinaRepository;
import com.stefanini.aceleraDevs.repository.EnderecoRepository;
import com.stefanini.aceleraDevs.repository.TurmaRepository;

@Configuration
@Profile("test")
public class TestConfiguration {

    @Bean
    CommandLineRunner commandLineRunner(AlunoRepository alunoRepository,
                                        CursoRepository cursoRepository,
                                        DadosPessoaisRepository dadosPessoaisRepository,
                                        DisciplinaRepository disciplinaRepository,
                                        TurmaRepository turmaRepository,
                                        EnderecoRepository enderecoRepository) {
        return args -> {
            Turma turma = new Turma();
            turma.setNome("MD1A");
            turmaRepository.save(turma);
            
            Curso curso = new Curso(null, "Medicina",
                    new ArrayList<Disciplina>(),
                    80,null);
            cursoRepository.save(curso);
            DadosPessoais dadosPessoais = new DadosPessoais(null,
                    "98603077096",
                    "joao@gmail.com",
                    "11997777777",
                    "385208510",
                    new Endereco(null,"Rua Santos","10","Mauá","SP","09450000")
                    );
            Aluno joao = new Aluno(null,
                    "Joao",
                    "1234567",
                   dadosPessoais,
                    turma,
                    curso
            );
            alunoRepository.save(joao);
            
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
