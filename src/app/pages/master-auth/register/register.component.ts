import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-register',
  host: { class: "container" },
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  name: string = "";
  username: string = "";
  password: string = "";
  role: string = "";

  constructor(private authService: AuthService){}

  async onSubmit(event: Event){
    event.preventDefault();


    try{
      await this.authService.register({
        name: this.name,
        username: this.username,
        password: this.password,
        role: this.role
      }) 
      alert("Cadastrado!");
    }catch(err){
      alert(err.message);
    }
  }
}
