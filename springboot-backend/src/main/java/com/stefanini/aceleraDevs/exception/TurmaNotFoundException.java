package com.stefanini.aceleraDevs.exception;

public class TurmaNotFoundException extends Exception{
    public TurmaNotFoundException(Long id) {
       super("Turma não encontrado com id:" +id);
    }
}
