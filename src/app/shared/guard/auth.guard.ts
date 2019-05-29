import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Injectable()
export class AuthGuard implements CanActivate {

    date: any;
    constructor(private router: Router, private loginService: LoginService, ) {}

    canActivate() {
        const currentUser = localStorage.getItem('isRemember');

        if (currentUser === 'true' && localStorage.getItem('isLoggedin')) {

            this.date = localStorage.getItem('expiredate');
            const newDate = new Date(this.date);
            const now: Date = new Date();

            if (newDate < now) {
                this.router.navigate(['/login']);
            }

            return true;
        } else if (currentUser === 'false' && sessionStorage.getItem('isLoggedin')) {

            this.date = sessionStorage.getItem('expiredate');
            const newDate = new Date(this.date);
            const now: Date = new Date();

            if (newDate < now) {
                this.router.navigate(['/login']);
            }

            return true;
        }

        this.router.navigate(['/login']);
        return false;
    }
}
