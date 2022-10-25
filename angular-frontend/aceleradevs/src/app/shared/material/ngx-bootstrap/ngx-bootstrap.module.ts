import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalModule } from 'ngx-bootstrap/modal';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { BsModalService } from 'ngx-bootstrap/modal';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import {MatIconModule} from '@angular/material/icon';

const MODULES = [
  TooltipModule,
  ModalModule,
  CarouselModule,
  BsDropdownModule,
  CollapseModule,
  AccordionModule,
  MatIconModule
];

@NgModule({
  declarations: [],
  imports: [CommonModule, MODULES],
  exports: [MODULES],
  providers: [BsModalService],
})
export class NgxBootstrapModule {}