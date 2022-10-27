package com.stefanini.aceleraDevs.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.stefanini.aceleraDevs.exception.DadosPessoaisNotFoundException;
import com.stefanini.aceleraDevs.model.DadosPessoais;
import com.stefanini.aceleraDevs.model.Endereco;
import com.stefanini.aceleraDevs.repository.DadosPessoaisRepository;
import com.stefanini.aceleraDevs.repository.EnderecoRepository;

@Service

public class DadosPessoaisService {

    private final DadosPessoaisRepository dadosPessoaisRepository;
    private final EnderecoRepository enderecoRepository;

    public DadosPessoaisService(DadosPessoaisRepository dadosPessoaisRepository, EnderecoRepository enderecoRepository) {
        this.dadosPessoaisRepository = dadosPessoaisRepository;
        this.enderecoRepository = enderecoRepository;
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
    
    public void deleteById(Long id) throws DadosPessoaisNotFoundException {
        DadosPessoais dadosPessoais = findById(id);
        System.out.println(dadosPessoais.getEndereco().toString());
        Endereco endereco = enderecoRepository.findById(dadosPessoais.getEndereco().getId()).get();
        enderecoRepository.deleteById(endereco.getId());
        dadosPessoaisRepository.delete(dadosPessoais);
        

    }

}
