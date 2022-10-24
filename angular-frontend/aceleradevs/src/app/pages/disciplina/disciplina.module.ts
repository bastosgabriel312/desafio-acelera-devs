import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisciplinaComponent } from './disciplina.component';
import { DisciplinaDetalhesComponent } from './disciplina-detalhes/disciplina-detalhes.component';
import { TabelaComponent } from './tabela/tabela.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { ModalModule } from 'ngx-bootstrap/modal';
import { FormModalComponent } from './form-modal/form-modal.component';

@NgModule({
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatSelectModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    RouterModule,
    MatInputModule,
    ModalModule
  ],
  declarations: [
    DisciplinaComponent,
    TabelaComponent,
    DisciplinaDetalhesComponent,
    FormModalComponent
    
  ],
  exports:[
    TabelaComponent,
    DisciplinaComponent,
    DisciplinaDetalhesComponent,
    FormModalComponent
    
    ],

})
export class DisciplinaModule { }
