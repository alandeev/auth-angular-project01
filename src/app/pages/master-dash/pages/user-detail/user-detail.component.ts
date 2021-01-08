import { Component, OnInit } from '@angular/core';

export interface IImage {
  filename: string;
}

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  name: string;
  username: string;
  password: string;
  image: IImage;
  constructor() {
    var user = JSON.parse(localStorage.getItem("user"));
    this.name = user.name;
    this.username = user.username;
    this.image = user.image;
  }

  ngOnInit(): void {
  }
  
  onSubmit(event: Event) {

  }

}
