package com.stefanini.aceleraDevs.controller;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.util.UriComponentsBuilder;

import com.stefanini.aceleraDevs.dto.AlunoDTO;
import com.stefanini.aceleraDevs.exception.TurmaNotFoundException;
import com.stefanini.aceleraDevs.mapper.AlunoDTOService;
import com.stefanini.aceleraDevs.model.Aluno;
import com.stefanini.aceleraDevs.service.AlunoService;

@RestController
@RequestMapping("/aluno")
public class AlunoController {

    private final AlunoService alunoService;
    private final AlunoDTOService alunoDTOService;

    @Autowired
    public AlunoController(AlunoService alunoService, AlunoDTOService alunoDTOService) {
        this.alunoService = alunoService;
        this.alunoDTOService = alunoDTOService;
    }

	@GetMapping
	public List<Aluno> listAluno() {
		return alunoService.findAllAlunos();
	}

    @PostMapping
    public ResponseEntity<AlunoDTO> saveAluno(@RequestBody AlunoDTO aluno, UriComponentsBuilder uriBuilder) throws TurmaNotFoundException {
        Aluno newAluno = alunoDTOService.mapAluno(aluno);
        Aluno alunoSaved = alunoService.save(newAluno);
        URI uri = uriBuilder.path("/aluno/{id}").buildAndExpand(alunoSaved.getId()).toUri();
		return ResponseEntity.created(uri).body(new AlunoDTO(alunoSaved));
    }
    

}
