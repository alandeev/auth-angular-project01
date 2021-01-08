import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
@Component({
  selector: 'app-edit-image-modal',
  templateUrl: './edit-image-modal.component.html',
  styleUrls: ['./edit-image-modal.component.css']
})
export class EditImageModalComponent  {
  file: any;
  constructor(private http: HttpClient, public dialogRef: MatDialogRef<EditImageModalComponent>) {}

  async onSubmit(event: Event){
    event.preventDefault();
    let formData = new FormData();
    formData.append('upload', this.file, this.file.name);

    var token = localStorage.getItem("authorization");
    console.log({token});
    try{
      let page: string = await this.http.post(`https://localhost:5001/v1/users/uploads`, formData, { 
      responseType: 'text',  
      headers: {
          "Authorization": token,
          'enctype': 'multipart/form-data'
        }
       }).toPromise(); 

       this.dialogRef.close(page);
    }catch(err: any){
      alert(err.message);
    }
  }

  fileChange(event: any){
    let fileList: FileList = event.target.files;
    if(fileList.length > 0) {
      this.file = fileList[0];
    }
  }
}
