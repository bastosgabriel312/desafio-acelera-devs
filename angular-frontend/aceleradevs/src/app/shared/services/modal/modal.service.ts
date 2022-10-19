import { Injectable, TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  constructor(private modalService: BsModalService) {}

  openModal(template: TemplateRef<any>): void {
    this.modalService.show(template);
  }

  hideModal(): void {
    this.modalService.hide();
  }
}
