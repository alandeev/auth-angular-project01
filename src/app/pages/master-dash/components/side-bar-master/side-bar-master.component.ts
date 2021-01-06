import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar-master',
  templateUrl: './side-bar-master.component.html',
  styleUrls: ['./side-bar-master.component.css']
})
export class SideBarMasterComponent implements OnInit {
  @Input("username") username: string;
  constructor() { }

  ngOnInit(): void {
  }

}
