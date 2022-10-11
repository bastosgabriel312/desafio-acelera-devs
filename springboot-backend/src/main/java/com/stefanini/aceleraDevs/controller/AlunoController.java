package com.stefanini.aceleraDevs.controller;

import java.net.URI;
import java.util.List;

import javax.validation.ConstraintViolationException;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.util.UriComponentsBuilder;

import com.stefanini.aceleraDevs.controller.form.AlunoForm;
import com.stefanini.aceleraDevs.dto.AlunoDTO;
import com.stefanini.aceleraDevs.exception.AlunoNotFoundException;
import com.stefanini.aceleraDevs.exception.CursoNotFoundException;
import com.stefanini.aceleraDevs.exception.DisciplinaNotFoundException;
import com.stefanini.aceleraDevs.exception.TurmaNotFoundException;
import com.stefanini.aceleraDevs.mapper.AlunoDTOService;
import com.stefanini.aceleraDevs.model.Aluno;
import com.stefanini.aceleraDevs.service.AlunoService;
import com.stefanini.aceleraDevs.service.TurmaService;

@RestController
@RequestMapping("/aluno")
public class AlunoController {

    private final AlunoService alunoService;
    private final AlunoDTOService alunoDTOService;
    private final TurmaService turmaService;

    @Autowired
    public AlunoController(AlunoService alunoService, AlunoDTOService alunoDTOService, TurmaService turmaService) {
        this.alunoService = alunoService;
        this.alunoDTOService = alunoDTOService;
        this.turmaService = turmaService;
    }

	@GetMapping
	public ResponseEntity<List<AlunoDTO>> listAluno() {
		List<Aluno> alunos = alunoService.findAllAlunos();
		return ResponseEntity.ok(AlunoDTO.converter(alunos));
	}

    @PostMapping
    public ResponseEntity<?> saveAluno(@RequestBody AlunoDTO aluno, UriComponentsBuilder uriBuilder) throws TurmaNotFoundException {
        try {
    	Aluno newAluno = alunoDTOService.mapAluno(aluno);
    	if (!AlunoDTO.isValidDadosPessoais(newAluno)) {
        	return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Dados pessoais inválidos");
        }
        Aluno alunoSaved = alunoService.save(newAluno);
        URI uri = uriBuilder.path("/aluno/{id}").buildAndExpand(alunoSaved.getId()).toUri();
		return ResponseEntity.created(uri).body(new AlunoDTO(alunoSaved));
        } catch (ConstraintViolationException e) {
        	System.err.println(e);
        	return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Dados pessoais inválidos");
		}
    }
    
	@GetMapping("/{id}")
	public ResponseEntity<?> getAluno(@PathVariable Long id) {
		try {
			Aluno aluno = alunoService.findById(id);
			return ResponseEntity.ok(new AlunoDTO(aluno));
		} catch (AlunoNotFoundException e) {
			return ResponseEntity.notFound().build();
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
		}
	}

	@PutMapping("/{id}")
	public ResponseEntity<?> updateAluno(@PathVariable Long id, @RequestBody @Valid AlunoForm alunoForm)
			throws CursoNotFoundException, DisciplinaNotFoundException, AlunoNotFoundException {
		try {
			Aluno alunoUpdated = alunoForm.atualizar(id, alunoService, turmaService);
			return ResponseEntity.ok(new AlunoDTO(alunoUpdated));
		} catch (AlunoNotFoundException e) {
			return ResponseEntity.notFound().build();
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
		}
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<?> remover(@PathVariable Long id) {
		try {
			Aluno aluno = alunoService.findById(id);
			alunoService.deleteById(aluno.getId());;
			return ResponseEntity.ok().build();
		} catch (AlunoNotFoundException e) {
			return ResponseEntity.notFound().build();
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
		}
	}
}