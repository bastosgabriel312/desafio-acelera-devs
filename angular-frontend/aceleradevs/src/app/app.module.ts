import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { NavbarComponent } from './shared/material/components/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { AlunoModule } from './pages/aluno/aluno.module';
import { HttpClientModule } from '@angular/common/http';
import { ModalModule } from 'ngx-bootstrap/modal';
import { DisciplinaModule } from './pages/disciplina/disciplina.module';
import { HomeModule } from './pages/home/home.module';
import { TurmaModule } from './pages/turma/turma.module';
import { CursoModule } from './pages/curso/Curso.module';
import { MatIconModule } from '@angular/material/icon';
import { NgxMaskModule } from 'ngx-mask';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [AppComponent, NavbarComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AlunoModule,
    DisciplinaModule,
    TurmaModule,
    CursoModule,
    HomeModule,
    HttpClientModule,
    ModalModule.forRoot(),
    CommonModule,
    TooltipModule,
    CollapseModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatIconModule,
    NgxMaskModule.forRoot(),
  ],

  bootstrap: [AppComponent],
})
export class AppModule {}
