package com.stefanini.aceleraDevs.mapper;

import com.stefanini.aceleraDevs.dto.TurmaDTO;
import com.stefanini.aceleraDevs.model.Turma;
import org.springframework.stereotype.Service;

@Service
public class TurmaDTOService {

     public Turma mapTurma(TurmaDTO turma){

        Turma newTurma = new Turma(null, turma.getNome(), null, null);
        return newTurma;
    }
}
