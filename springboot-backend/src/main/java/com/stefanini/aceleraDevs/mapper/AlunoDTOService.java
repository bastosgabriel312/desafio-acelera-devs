package com.stefanini.aceleraDevs.mapper;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.stefanini.aceleraDevs.controller.form.AlunoForm;
import com.stefanini.aceleraDevs.exception.CursoNotFoundException;
import com.stefanini.aceleraDevs.exception.TurmaNotFoundException;
import com.stefanini.aceleraDevs.model.Aluno;
import com.stefanini.aceleraDevs.model.Curso;
import com.stefanini.aceleraDevs.model.DadosPessoais;
import com.stefanini.aceleraDevs.model.Turma;
import com.stefanini.aceleraDevs.service.CursoService;
import com.stefanini.aceleraDevs.service.DadosPessoaisService;
import com.stefanini.aceleraDevs.service.TurmaService;

@Service
public class AlunoDTOService {

    private final TurmaService turmaService;
    private final DadosPessoaisService dadosPessoaisService;
    private final CursoService cursoService;

    @Autowired
    public AlunoDTOService(TurmaService turmaService, CursoService cursoService,
            DadosPessoaisService dadosPessoaisService) {
        this.turmaService = turmaService;
        this.dadosPessoaisService = dadosPessoaisService;
        this.cursoService = cursoService;
    }

    public Aluno mapAluno(AlunoForm aluno) throws TurmaNotFoundException, CursoNotFoundException {
        Turma turma;
        Curso curso;
        DadosPessoais dadosPessoais = new DadosPessoais(
                null,
                aluno.getCpf(),
                aluno.getEmail(),
                aluno.getTelefone(),
                aluno.getRg(),
                aluno.getEndereco());
        dadosPessoaisService.save(dadosPessoais);
        Aluno newAluno = new Aluno(null,
                aluno.getNome(),
                aluno.getMatricula(),
                dadosPessoaisService.save(dadosPessoais),
                turma = turmaService.findById(aluno.getIdTurma()),
                curso = cursoService.findById(aluno.getIdCurso()));
        return newAluno;
    }
}
