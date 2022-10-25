import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlunoComponent } from './aluno.component';
import { TabelaComponent } from './tabela/tabela.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort'
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { AlunoDetalhesComponent } from './aluno-detalhes/aluno-detalhes.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { FormModalComponent } from './aluno-cadastro/form-modal/form-modal.component';
import { ModalModule } from 'ngx-bootstrap/modal';


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
    AlunoComponent,
    TabelaComponent,
    AlunoDetalhesComponent,
    FormModalComponent
  ],
  exports:[
    TabelaComponent,
    AlunoComponent,
    AlunoDetalhesComponent,
    FormModalComponent
    ],

})
export class AlunoModule { }
