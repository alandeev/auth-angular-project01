import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IToken } from '../entities/IToken';
import { IUser } from '../entities/IUser';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  constructor(private http: HttpClient) { }

  async getPosts({ token }: IToken): Promise<any[]> {
    return await this.http.get<any[]>('https://localhost:5001/v1/users/posts', {
        headers: { authorization: token }
    }).toPromise();
  }
}
