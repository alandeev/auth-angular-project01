import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditImageModalComponent } from './modal/edit-image-modal/edit-image-modal.component';

export interface IImage {
  filename: string;
}

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent {
  name: string;
  username: string;
  password: string;
  image: IImage;
  result: string

  constructor(public dialog: MatDialog) {
    var user = JSON.parse(localStorage.getItem("user"));
    this.name = user.name;
    this.username = user.username;
    this.image = user.image;
  }

  onSubmit(event: Event) {

  }

  openDialog(): void {
    const dialogRef = this.dialog.open(EditImageModalComponent, {
      width: '500px',
      height: '200px',
      data: {name: 'pedro', animal: 'dawdaw'}
    });

    dialogRef.afterClosed().subscribe(imageName => {
      if(imageName){
        this.image = { filename: imageName };
      }
    });
  }
}
