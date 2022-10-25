import { Component, OnInit } from '@angular/core';
import { Menus } from 'src/app/shared/model/Menu';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  navbarOpen = false;

  optionsMenu: Menus = [
    {
      nome:'Aluno',
      type:'person',
      router:'/aluno'
      },
    {
      nome:'Turma',
      type:'people',
      router:'/turma'
      },
    {
      nome:'Curso',
      type:'school',
      router:'/curso'
    },
    {
      nome:'Disciplina',
      type:'class',
      router:'/disciplina'
    }
  ];

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }
  ngOnInit() {
  }

}
