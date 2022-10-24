package com.stefanini.aceleraDevs.service;

import com.stefanini.aceleraDevs.exception.CursoNotFoundException;
import com.stefanini.aceleraDevs.model.Curso;
import com.stefanini.aceleraDevs.repository.CursoRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service

public class CursoService {

    private final CursoRepository cursoRepository;

    public CursoService(CursoRepository cursoRepository) {
        this.cursoRepository = cursoRepository;
    }

    public List<Curso> findAllCursos(){
        return cursoRepository.findAllByEnabled(true);
    }

    public Curso findById(Long id) throws CursoNotFoundException {
        Optional<Curso> curso = cursoRepository.findById(id);
        if(!curso.isEmpty()) {
            if(curso.get().isEnabled())
                return curso.get();
        }
        throw new CursoNotFoundException(id);
    }
    
    public Curso updateTotalHoras(Integer totalHoras, Curso curso) throws CursoNotFoundException {
    	curso.setTotalGrade(totalHoras);
    	cursoRepository.save(curso);
    	return curso;
    }
    
    public Curso save(Curso curso){
        return cursoRepository.save(curso);
    }

	public void deleteById(Long id) throws CursoNotFoundException {
		Curso curso = findById(id);
		curso.setEnabled(false);
		curso.setName(curso.getName()+" [DESABILITADO]");
		cursoRepository.save(curso);	
	}
}
