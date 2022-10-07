package com.stefanini.aceleraDevs.service;

import com.stefanini.aceleraDevs.exception.AlunoNotFoundException;
import com.stefanini.aceleraDevs.model.Aluno;
import com.stefanini.aceleraDevs.repository.AlunoRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service

public class AlunoService {

    private final AlunoRepository alunoRepository;

    public AlunoService(AlunoRepository alunoRepository) {
        this.alunoRepository = alunoRepository;
    }

    public List<Aluno> findAllAlunos(){
        return alunoRepository.findAll();
    }

    public Aluno findById(Long id) throws AlunoNotFoundException {
        return alunoRepository.findById(id)
                .orElseThrow(()-> new AlunoNotFoundException(id));
    }

    public Aluno save(Aluno aluno){
        return alunoRepository.save(aluno);
    }

}
