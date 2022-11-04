package com.stefanini.aceleraDevs.service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import javax.validation.ConstraintViolationException;

import org.springframework.stereotype.Service;

import com.stefanini.aceleraDevs.exception.AlunoNotFoundException;
import com.stefanini.aceleraDevs.exception.DadosPessoaisNotFoundException;
import com.stefanini.aceleraDevs.model.Aluno;
import com.stefanini.aceleraDevs.model.Curso;
import com.stefanini.aceleraDevs.model.Turma;
import com.stefanini.aceleraDevs.repository.AlunoRepository;

@Service

public class AlunoService {

    private final AlunoRepository alunoRepository;
    private final DisciplinaService disciplinaService;
    private final TurmaService turmaService;
    private final DadosPessoaisService dadosPessoaisService;

    public AlunoService(AlunoRepository alunoRepository, DisciplinaService disciplinaService, TurmaService turmaService, DadosPessoaisService dadosPessoaisService) {
        this.alunoRepository = alunoRepository;
        this.disciplinaService = disciplinaService;
        this.turmaService = turmaService;
        this.dadosPessoaisService = dadosPessoaisService;
    }

    public List<Aluno> findAllAlunos() {
        return alunoRepository.findAll();
    }

    public Aluno findById(Long id) throws AlunoNotFoundException {
        return alunoRepository.findById(id).orElseThrow(() -> new AlunoNotFoundException(id));
    }

    public Aluno save(Aluno aluno) throws ConstraintViolationException {
        return alunoRepository.save(aluno);
    }

    // Verifica se as disciplinas condizem com o curso que o aluno está matriculado.
    public boolean disciplinasInCurso(Aluno aluno) {
        if (aluno == null) {
            return false;
        }else {
            return this.disciplinasTurmaInCurso(aluno.getTurma(),aluno.getCurso());
        }
    }
    
    public boolean disciplinasTurmaInCurso(Turma turma, Curso curso) {
        List<Long> disciplinasCurso = disciplinaService.findAllByCurso(curso).stream().map(d->d.getId()).collect(Collectors.toList());
        List<Long> disciplinasTurma = disciplinaService.findAllByTurma(turma).stream().map(d->d.getId()).collect(Collectors.toList());
        disciplinasTurma.forEach(d->System.out.println("D TURMA: "+d));
        System.out.println(disciplinasTurma);
        return !disciplinasTurma.isEmpty()?disciplinasCurso.containsAll(disciplinasTurma):false;
    }

    // Retorna lista de turmas se as disciplinas condizem com o curso que o aluno está matriculado.
    public List<Turma> listaDisciplinasInCurso(Curso curso) {
        List<Turma> turmas = turmaService.findAllTurmas();
        ArrayList<Turma> turmasAdequadas = new ArrayList<Turma>() ;
        
        turmas.forEach((t)->{if (this.disciplinasTurmaInCurso(t,curso)) {
           turmasAdequadas.add(t);
            }});
        return turmasAdequadas;
    }

    public void deleteById(Long id) throws AlunoNotFoundException, DadosPessoaisNotFoundException {
        Aluno aluno = findById(id);
        alunoRepository.delete(aluno);
        dadosPessoaisService.deleteById(aluno.getDadosPessoais().getId());
    }
}