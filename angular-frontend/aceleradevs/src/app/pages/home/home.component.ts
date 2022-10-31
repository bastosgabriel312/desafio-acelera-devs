import { Component, OnInit } from '@angular/core';
import { Menus } from 'src/app/shared/model/Menu';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  optionsMenu: Menus = [
    {
      nome:'Aluno',
      type:'Área destinada a visualização, edição, criação e remoção de alunos.',
      router:'/aluno'
      },
    {
      nome:'Turma',
      type:'Área destinada a visualização, edição, criação e remoção de turmas.',
      router:'/turma'
      },
    {
      nome:'Curso',
      type:'Área destinada a visualização, edição, criação e remoção de cursos.',
      router:'/curso'
    },
    {
      nome:'Disciplina',
      type:'Área destinada a visualização, edição, criação e remoção de disciplinas.',
      router:'/disciplina'
    }
  ];
  constructor() { }

  ngOnInit() {

  }
}