import { Component, OnInit } from '@angular/core';
import { Menu, Menus } from 'src/app/shared/model/Menu';

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
      type:'',
      router:'/aluno'
      },
    {
      nome:'Turma',
      type:'',
      router:'/turma'
      },
    {
      nome:'Curso',
      type:'',
      router:'/curso'
    },
    {
      nome:'Disciplina',
      type:'',
      router:'/disciplina'
    }
  ];

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }
  ngOnInit() {
  }

}
