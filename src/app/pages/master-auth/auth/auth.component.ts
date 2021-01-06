import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-auth',
  host: { class: "container" },
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
  username: string = "";
  password: string = "";

  constructor(private authService: AuthService, private router: Router){ }

  async onSubmit(event: Event){
    event.preventDefault();
    
    try{
      let { token } = await this.authService.authenticate({
        username: this.username,
        password: this.password
      })

      localStorage.setItem("authorization", token);
      return this.router.navigate(['/painel'])
    }catch(err){
      alert(err.message);
    }
  }
}
