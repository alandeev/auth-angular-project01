import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input() id: string;
  @Input() title: string;
  @Input() description: string;
  @Input() user: any;

  ngOnInit(): void {
    console.log(this);
  }

  deletePost(){
    console.log({ id: this.id , delete: true});
  }
}
