package com.stefanini.aceleraDevs.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.stefanini.aceleraDevs.exception.DisciplinaNotFoundException;
import com.stefanini.aceleraDevs.model.Curso;
import com.stefanini.aceleraDevs.model.Disciplina;
import com.stefanini.aceleraDevs.repository.DisciplinaRepository;

@Service

public class DisciplinaService {

    private final DisciplinaRepository disciplinaRepository;

    public DisciplinaService(DisciplinaRepository disciplinaRepository) {
        this.disciplinaRepository = disciplinaRepository;
    }

    public List<Disciplina> findAllDisciplinas(){
        return disciplinaRepository.findAll();
    }

    public Disciplina findById(Long id) throws DisciplinaNotFoundException {
        return disciplinaRepository.findById(id)
                .orElseThrow(()-> new DisciplinaNotFoundException(id));
    }

    public Disciplina save(Disciplina disciplina){
        return disciplinaRepository.save(disciplina);
    }
    
    public Integer somaTotalHorasByCurso(Curso curso) {
    	return disciplinaRepository.findTotalHorasByCurso(curso);
    }

	public void deleteById(Long id) throws DisciplinaNotFoundException {
		Disciplina disciplina = findById(id);
		disciplinaRepository.delete(disciplina);
		
	};

}
