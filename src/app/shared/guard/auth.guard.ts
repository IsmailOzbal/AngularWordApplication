import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Injectable()
export class AuthGuard implements CanActivate {

    date: any;
    constructor(private router: Router, private loginService: LoginService, ) {}

    canActivate() {
        const currentUser = localStorage.getItem('isLoggedin');

        if (currentUser) {

            this.date = localStorage.getItem('expiredate');
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
