package com.stefanini.aceleraDevs.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.stefanini.aceleraDevs.exception.TurmaNotFoundException;
import com.stefanini.aceleraDevs.model.Turma;
import com.stefanini.aceleraDevs.repository.TurmaRepository;

@Service

public class TurmaService {

    private final TurmaRepository turmaRepository;

    public TurmaService(TurmaRepository turmaRepository) {
        this.turmaRepository = turmaRepository;
    }

    public List<Turma> findAllTurmas(){
        return turmaRepository.findAllByEnabled(true);
    }

    public Turma findById(Long id) throws TurmaNotFoundException {
        Optional<Turma> turma = turmaRepository.findById(id);
        if(!turma.isEmpty()) {
            if(turma.get().isEnabled())
                return turma.get();
        }
        throw new TurmaNotFoundException(id);
    }

    public Turma save(Turma turma){
        return turmaRepository.save(turma);
    }

	public void deleteById(Long id) throws TurmaNotFoundException {
	    Turma turma = findById(id);
        turma.setEnabled(false);
        turma.setNome(turma.getNome()+" [DESABILITADO]");
        turmaRepository.save(turma);    
	}

}
