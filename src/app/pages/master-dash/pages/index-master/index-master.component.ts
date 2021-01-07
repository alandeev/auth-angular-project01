import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-index-master',
  templateUrl: './index-master.component.html',
  styleUrls: ['./index-master.component.css']
})
export class IndexMasterComponent implements OnInit {
  @Output('received') evt = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
    this.evt.emit("home");
  }
}
