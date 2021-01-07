import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-side-bar-master',
  templateUrl: './side-bar-master.component.html',
  styleUrls: ['./side-bar-master.component.css']
})
export class SideBarMasterComponent {
  @Input() name: string;
  @Input() role: string;
  @Output('onSelect') evt = new EventEmitter();
}
