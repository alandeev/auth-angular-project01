import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class isConnected implements CanActivate {
    constructor(private router: Router) { }
    canActivate() {
        let token = localStorage.getItem("authorization");
        if(!token){
            this.router.navigate(['/auth'])
            return false;
        }
        return true;
    }
}

@Injectable({ providedIn: 'root' })
export class notConnected implements CanActivate {
    constructor(private router: Router) { }
    canActivate(
        next: ActivatedRouteSnapshot,
    ) {
        let token = localStorage.getItem("authorization");
        if(token){
            return this.router.navigate(['/painel'])
        }
        return true;
    }
}