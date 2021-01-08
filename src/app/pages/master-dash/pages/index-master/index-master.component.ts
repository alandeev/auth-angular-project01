import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-index-master',
  templateUrl: './index-master.component.html',
  styleUrls: ['./index-master.component.css']
})
export class IndexMasterComponent implements OnInit {
  @Output('received') evt = new EventEmitter();
  posts: any[];
  constructor(private postService: PostService) { }

  async ngOnInit() {
    let token = localStorage.getItem("authorization"); 
    this.posts = await this.postService.getPosts({ token });
    this.evt.emit("home");
  }
}
