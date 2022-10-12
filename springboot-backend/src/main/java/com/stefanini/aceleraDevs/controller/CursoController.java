package com.stefanini.aceleraDevs.controller;

import java.net.URI;
import java.util.List;

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

import com.stefanini.aceleraDevs.controller.form.CursoForm;
import com.stefanini.aceleraDevs.dto.CursoDTO;
import com.stefanini.aceleraDevs.dto.DetalheCursoDTO;
import com.stefanini.aceleraDevs.exception.CursoNotFoundException;
import com.stefanini.aceleraDevs.exception.DisciplinaNotFoundException;
import com.stefanini.aceleraDevs.exception.TurmaNotFoundException;
import com.stefanini.aceleraDevs.mapper.CursoDTOService;
import com.stefanini.aceleraDevs.model.Curso;
import com.stefanini.aceleraDevs.service.CursoService;

@RestController
@RequestMapping("/curso")
public class CursoController {

	private final CursoService cursoService;
	private final CursoDTOService cursoDTOService;

	@Autowired
	public CursoController(CursoService cursoService, CursoDTOService cursoDTOService) {
		this.cursoService = cursoService;
		this.cursoDTOService = cursoDTOService;
	}

	@GetMapping
	public ResponseEntity<List<CursoDTO>> listCurso() {
		List<Curso> cursos = cursoService.findAllCursos();
		return ResponseEntity.ok(CursoDTO.converter(cursos));
	}

	@PostMapping
	public ResponseEntity<?> saveCurso(@RequestBody @Valid CursoDTO curso, UriComponentsBuilder uriBuilder)
			throws TurmaNotFoundException {
		try {
			Curso newCurso = cursoDTOService.mapCurso(curso);
			Curso cursoSaved = cursoService.save(newCurso);
			URI uri = uriBuilder.path("/curso/{id}").buildAndExpand(cursoSaved.getId()).toUri();
			return ResponseEntity.created(uri).body(new CursoDTO(cursoSaved));
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
		}

	}

	@GetMapping("/{id}")
	public ResponseEntity<?> getCurso(@PathVariable Long id) {
		try {
			Curso curso = cursoService.findById(id);
			return ResponseEntity.ok(new DetalheCursoDTO(curso));
		} catch (CursoNotFoundException e) {
		    return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
		}
	}

	@PutMapping("/{id}")
	public ResponseEntity<?> updateCurso(@PathVariable Long id, @RequestBody @Valid CursoForm cursoForm)
			throws CursoNotFoundException, DisciplinaNotFoundException {
		try {
			Curso cursoUpdated = cursoForm.atualizar(id, cursoService);
			return ResponseEntity.ok(new CursoDTO(cursoUpdated));
		} catch (CursoNotFoundException e) {
		    return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
		}
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<?> remover(@PathVariable Long id) {
		try {
			Curso curso = cursoService.findById(id);
			cursoService.deleteById(curso.getId());;
			return ResponseEntity.ok().build();
		} catch (CursoNotFoundException e) {
		    return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
		}
	}
}