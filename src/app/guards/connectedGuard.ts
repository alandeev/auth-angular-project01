import { ActivatedRouteSnapshot, CanActivate, Resolve, Router } from '@angular/router';
import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../services/user.service';
import { Observable } from 'rxjs';
import { IUser } from '../entities/IUser';

@Injectable({ providedIn: 'root' })
export class isConnected implements CanActivate {
    constructor(
        private router: Router,
        private http: HttpClient
    ) { }
    async canActivate() {
        let authorization = localStorage.getItem("authorization");
        if(!authorization){
            return this.router.navigate(['/auth'])
        }

        try{
            let user = await this.http.get('https://localhost:5001/v1/users/oauth', {
                headers: { authorization }
            }).toPromise()
            localStorage.setItem("user", JSON.stringify(user));
            return true;
        }catch(err){
            localStorage.clear();
            return this.router.navigate(['/auth']);
        }
    }
}

@Injectable({ providedIn: 'root' })
export class notConnected implements CanActivate {
    constructor(private router: Router) { }
    canActivate( next: ActivatedRouteSnapshot ) {
        let token = localStorage.getItem("authorization");
        if(token){
            return this.router.navigate(['/painel'])
        }
        return true;
    }
}

@Injectable({ providedIn: 'root' })
export class testResolve implements Resolve<IUser> {
    constructor(private service: UserService) {}

    async resolve(route: ActivatedRouteSnapshot): Promise<IUser>{
        let authorization = localStorage.getItem("authorization");
        return await this.service.oAuth({ token: authorization });
    }
}