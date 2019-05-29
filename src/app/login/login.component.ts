import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from '../shared/services/login.service';
import { NgxSpinnerService } from 'ngx-spinner';
import swal from 'sweetalert2';
import { Token } from 'src/app/shared/Model/Token';
import { UserModel } from '../shared/Model/User';
@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    LoginForm: FormGroup;
    user: UserModel = new UserModel();
    token: Token = new Token();
    constructor(private router: Router, private formBuilder: FormBuilder,
        private loginService: LoginService ,
        private spinner: NgxSpinnerService, ) {}

    ngOnInit() {


    this.LoginForm = this.formBuilder.group({
        Email: ['', Validators.required],
        Password: ['', Validators.required],
        isRemember: null
    });
    }

    onSubmit() {
        if (this.LoginForm.valid) {
            console.log(this.LoginForm.value);
            this.spinner.show();
            this.user.username = this.LoginForm.value.Email;
            this.user.password = this.LoginForm.value.Password;
            this.loginService
            .Login(this.user)
            .toPromise()
            .then(res => {
              this.token = res;
               this.AccessLogin();
            });
        }


    }

    AccessLogin() {
        if (this.token !== undefined) {
            if (this.LoginForm.value.isRemember === true) {
                localStorage.setItem('isRemember', 'true');
                localStorage.setItem('isLoggedin', 'true');
                localStorage.setItem('token', this.token.token);
                localStorage.setItem('expiredate', this.token.expireDate);
                localStorage.setItem('userid', this.token.userId.toString());
            } else {
                localStorage.setItem('isRemember', 'false');
                sessionStorage.setItem('isLoggedin', 'true');
                sessionStorage.setItem('token', this.token.token);
                sessionStorage.setItem('expiredate', this.token.expireDate);
                sessionStorage.setItem('userid', this.token.userId.toString());
            }

            this.router.navigate(['/dashboard']);
        } else {
              this.spinner.hide();
        }

    }
}
