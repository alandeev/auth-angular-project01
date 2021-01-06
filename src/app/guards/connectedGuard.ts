import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
            await this.http.get('https://localhost:5001/v1/users/oauth', {
                headers: { authorization }
            }).toPromise()
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