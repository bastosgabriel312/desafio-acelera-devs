package com.stefanini.aceleraDevs.service;

import com.stefanini.aceleraDevs.exception.DadosPessoaisNotFoundException;
import com.stefanini.aceleraDevs.model.DadosPessoais;
import com.stefanini.aceleraDevs.repository.DadosPessoaisRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service

public class DadosPessoaisService {

    private final DadosPessoaisRepository dadosPessoaisRepository;

    public DadosPessoaisService(DadosPessoaisRepository dadosPessoaisRepository) {
        this.dadosPessoaisRepository = dadosPessoaisRepository;
    }

    public List<DadosPessoais> findAllDadosPessoaiss(){
        return dadosPessoaisRepository.findAll();
    }

    public DadosPessoais findById(Long id) throws DadosPessoaisNotFoundException {
        return dadosPessoaisRepository.findById(id)
                .orElseThrow(()-> new DadosPessoaisNotFoundException(id));
    }

    public DadosPessoais save(DadosPessoais dadosPessoais){
        return dadosPessoaisRepository.save(dadosPessoais);
    }

}
