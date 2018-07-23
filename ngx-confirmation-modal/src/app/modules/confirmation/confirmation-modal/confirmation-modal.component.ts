import { Component, OnInit, Inject, Input, Output, EventEmitter, AfterContentInit, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-confirmation-modal',
  templateUrl: './confirmation-modal.component.html',
  styleUrls: ['./confirmation-modal.component.css'],

})
export class ConfirmationModalComponent implements OnInit, AfterContentInit {
  @Input() displayModal:any;
  @Input() title = 'Title';
  @Input() message = 'Message';
  @Output() result = new EventEmitter();

  constructor(private cd: ChangeDetectorRef) {

  }

  cancel() {
    this.result.next(false);
    this.displayModal.hide();
  }

  confirm() {
    this.result.next(true);
    this.displayModal.hide();
  }

  ngOnInit() { }

  ngAfterContentInit() {
    this.cd.detectChanges();
  }

}
