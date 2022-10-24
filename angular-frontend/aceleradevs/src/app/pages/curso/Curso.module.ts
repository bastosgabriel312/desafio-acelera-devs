import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursoComponent } from './Curso.component';
import { TabelaComponent } from './tabela/tabela.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { CursoDetalhesComponent } from './curso-detalhes/curso-detalhes.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatListModule} from '@angular/material/list';
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
    ModalModule,
    MatExpansionModule,
    MatListModule
  ],
  declarations: [
    TabelaComponent,
    CursoComponent,
    CursoDetalhesComponent,
    FormModalComponent
  ],
  exports:[
    TabelaComponent,
    CursoComponent,
    CursoDetalhesComponent,
    FormModalComponent
    ]
})
export class CursoModule { }
