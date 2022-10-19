import { BsModalRef } from 'ngx-bootstrap/modal';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.css'],
})
export class AlertsComponent implements OnInit {
  @Input() type!: string;
  @Input() mensagem!: string;

  constructor(public modalRef: BsModalRef) {}

  ngOnInit(): void {}

  onClose(): void {
    this.modalRef.hide();
  }
}
