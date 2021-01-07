import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/entities/IUser';

@Component({
  selector: 'app-master-dash',
  templateUrl: './master-dash.component.html',
  styleUrls: ['./master-dash.component.css']
})
export class MasterDashComponent implements OnInit {
  public user: IUser; 
  public selectPage = "home";
  constructor() { 
    this.user = JSON.parse(localStorage.getItem("user"));
  }

  getSelectPage(page: string){
    this.selectPage = page;
  }

  ngOnInit(): void {
  }
}
