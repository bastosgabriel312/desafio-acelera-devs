package com.stefanini.aceleraDevs.controller;

import com.stefanini.aceleraDevs.dto.CursoDTO;
import com.stefanini.aceleraDevs.exception.TurmaNotFoundException;
import com.stefanini.aceleraDevs.mapper.CursoDTOService;
import com.stefanini.aceleraDevs.model.Curso;

import com.stefanini.aceleraDevs.service.CursoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class CursoController {

    private final CursoService cursoService;
    private final CursoDTOService cursoDTOService;

    @Autowired
    public CursoController(CursoService cursoService, CursoDTOService cursoDTOService) {
        this.cursoService = cursoService;
        this.cursoDTOService = cursoDTOService;
    }

    @Autowired


    @RequestMapping(path = "/curso")
    public ModelAndView loadHtml() {

        ModelAndView mv = new ModelAndView("curso");
        CursoDTO cursoDTO = new CursoDTO();

        mv.addObject("cursoDTO", cursoDTO);

        return mv;
    }

    @PostMapping(value = "/curso")
    public String saveCurso(CursoDTO curso) throws TurmaNotFoundException {

        Curso newCurso = cursoDTOService.mapCurso(curso);

        cursoService.save(newCurso);

        return "redirect:/curso";
    }

}
