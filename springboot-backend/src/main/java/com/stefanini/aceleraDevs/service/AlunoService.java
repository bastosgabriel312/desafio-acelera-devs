package com.stefanini.aceleraDevs.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.stefanini.aceleraDevs.exception.AlunoNotFoundException;
import com.stefanini.aceleraDevs.model.Aluno;
import com.stefanini.aceleraDevs.repository.AlunoRepository;

@Service

public class AlunoService {

    private final AlunoRepository alunoRepository;
    private final DisciplinaService disciplinaService;

    public AlunoService(AlunoRepository alunoRepository, DisciplinaService disciplinaService) {
        this.alunoRepository = alunoRepository;
        this.disciplinaService = disciplinaService;
    }

    public List<Aluno> findAllAlunos() {
        return alunoRepository.findAll();
    }

    public Aluno findById(Long id) throws AlunoNotFoundException {
        return alunoRepository.findById(id).orElseThrow(() -> new AlunoNotFoundException(id));
    }

    public Aluno save(Aluno aluno) {
        return alunoRepository.save(aluno);
    }

    // Verifica se as disciplinas condizem com o curso que o aluno está matriculado.
    public boolean disciplinasInCurso(Aluno aluno) {
        if (!(aluno == null)) {
            List<Long> disciplinasCurso = disciplinaService.findAllByCurso(aluno.getCurso()).stream().map(d->d.getId()).collect(Collectors.toList());
            List<Long> disciplinasTurma = disciplinaService.findAllByTurma(aluno.getTurma()).stream().map(d->d.getId()).collect(Collectors.toList());
            return disciplinasCurso.containsAll(disciplinasTurma);
        }
        return false;
    }


    public void deleteById(Long id) throws AlunoNotFoundException {
        Aluno aluno = findById(id);
        alunoRepository.delete(aluno);

    }
}