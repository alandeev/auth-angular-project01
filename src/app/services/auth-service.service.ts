import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserConnectDTO, UserRegisterDTO } from '../entities/UserDTO';
import { IToken } from '../entities/IToken';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }

  async register(data: UserRegisterDTO): Promise<void> {
    try{ 
      await this.http.post<IToken>("https://localhost:5001/v1/register", {
        name: data.name,  
        username: data.username,
        password: data.password
      }, {
        responseType: "json"
      }).toPromise();
    }catch(err){
      let errorMessage = err.error?.errors ? err.error.errors[0] : "Failed to try connect";
      throw new Error(errorMessage);
    }
  }

  async authenticate(data: UserConnectDTO): Promise<IToken> {
    try{ 
      let token = await this.http.post<IToken>("https://localhost:5001/v1/auth", {
        username: data.username,
        password: data.password
      }, {
        responseType: "json"
      }).toPromise();

      return token;
    }catch(err){
      let errorMessage = err.error?.errors ? err.error.errors[0] : "Failed to try connect";
      throw new Error(errorMessage);
    }
  }
}
