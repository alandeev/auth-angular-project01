import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  @Input() id: string;
  @Input() title: string;
  @Input() description: string;
  @Input() user: any;

  deletePost(){
    console.log({ id: this.id , delete: true});
  }
}
