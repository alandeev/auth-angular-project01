import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IToken } from '../entities/IToken';
import { IUser } from '../entities/IUser';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }

  async oAuth({ token }: IToken): Promise<IUser> {
    return await this.http.get<IUser>('https://localhost:5001/v1/users/oauth', {
        headers: { authorization: token }
    }).toPromise();
  }
}
