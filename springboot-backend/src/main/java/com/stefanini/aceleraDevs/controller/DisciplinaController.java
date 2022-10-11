package com.stefanini.aceleraDevs.controller;

import java.net.URI;
import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.util.UriComponentsBuilder;

import com.stefanini.aceleraDevs.controller.form.DisciplinaForm;
import com.stefanini.aceleraDevs.dto.DisciplinaDTO;
import com.stefanini.aceleraDevs.exception.CursoNotFoundException;
import com.stefanini.aceleraDevs.exception.DisciplinaNotFoundException;
import com.stefanini.aceleraDevs.exception.TurmaNotFoundException;
import com.stefanini.aceleraDevs.mapper.DisciplinaDTOService;
import com.stefanini.aceleraDevs.model.Curso;
import com.stefanini.aceleraDevs.model.Disciplina;
import com.stefanini.aceleraDevs.service.CursoService;
import com.stefanini.aceleraDevs.service.DisciplinaService;
import com.stefanini.aceleraDevs.service.TurmaService;

@RestController
@RequestMapping("/disciplina")
public class DisciplinaController {

	private final DisciplinaService disciplinaService;
	private final DisciplinaDTOService disciplinaDTOService;
	private final CursoService cursoService;
	private final TurmaService turmaService;

	@Autowired
	public DisciplinaController(DisciplinaService disciplinaService, DisciplinaDTOService disciplinaDTOService,
			CursoService cursoService, TurmaService turmaService) {
		this.disciplinaService = disciplinaService;
		this.disciplinaDTOService = disciplinaDTOService;
		this.cursoService = cursoService;
		this.turmaService = turmaService;
	}

	@Autowired

	@GetMapping
	public ResponseEntity<List<DisciplinaDTO>> listDisciplina() {
		List<Disciplina> disciplinas = disciplinaService.findAllDisciplinas();
		return ResponseEntity.ok(DisciplinaDTO.converter(disciplinas));
	}

	@PostMapping
	public ResponseEntity<?> saveDisciplina(@RequestBody @Validated DisciplinaDTO disciplina,
			UriComponentsBuilder uriBuilder) throws TurmaNotFoundException, CursoNotFoundException {
		try {
			Disciplina newDisciplina = disciplinaDTOService.mapDisciplina(disciplina);
			Disciplina disciplinaSaved = disciplinaService.save(newDisciplina);
			Curso curso = disciplinaSaved.getCurso();
			Integer totalHorasCurso = disciplinaService.somaTotalHorasByCurso(curso);
			cursoService.updateTotalHoras(totalHorasCurso, curso);
			URI uri = uriBuilder.path("/disciplina/{id}").buildAndExpand(disciplinaSaved.getId()).toUri();
			return ResponseEntity.created(uri).body(new DisciplinaDTO(disciplinaSaved));
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
		}
	}

	@GetMapping("/{id}")
	public ResponseEntity<?> getDisciplina(@PathVariable Long id) {
		try {
			Disciplina disciplina = disciplinaService.findById(id);
			return ResponseEntity.ok(new DisciplinaDTO(disciplina));
		} catch (DisciplinaNotFoundException e) {
			return ResponseEntity.notFound().build();
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
		}

	}

	@PutMapping("/{id}")
	public ResponseEntity<?> updateDisciplina(@PathVariable Long id, @RequestBody @Valid DisciplinaForm disciplinaForm)
			throws TurmaNotFoundException, CursoNotFoundException, DisciplinaNotFoundException {
		try {
			Disciplina disciplinaUpdated = disciplinaForm.atualizar(id, disciplinaService, cursoService, turmaService);
			Curso curso = disciplinaUpdated.getCurso();
			Integer totalHorasCurso = disciplinaService.somaTotalHorasByCurso(curso);
			cursoService.updateTotalHoras(totalHorasCurso, curso);
			return ResponseEntity.ok(new DisciplinaDTO(disciplinaUpdated));
		} catch (DisciplinaNotFoundException e) {
			return ResponseEntity.notFound().build();
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
		}

	}

	@DeleteMapping("/{id}")
	public ResponseEntity<?> remover(@PathVariable Long id) {
		try {
			Disciplina disciplina = disciplinaService.findById(id);
			disciplinaService.deleteById(disciplina.getId());
			Curso curso = disciplina.getCurso();
			Integer totalHorasCurso = disciplinaService.somaTotalHorasByCurso(curso);
			cursoService.updateTotalHoras(totalHorasCurso, curso);
			return ResponseEntity.ok().build();
		} catch (DisciplinaNotFoundException e) {
			return ResponseEntity.notFound().build();
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
		}
	}

}
