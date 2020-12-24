import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
})
export class AlertComponent implements OnInit {
  @Input() message = '';
  @Input() icon = '';
  @Input() title = '';

  constructor() {}

  ngOnInit(): void {}
}
