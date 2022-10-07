package com.stefanini.aceleraDevs.exception;

public class CursoNotFoundException extends Exception{
    public CursoNotFoundException(Long id) {
       super("Curso não encontrado com id:" +id);
    }
}
