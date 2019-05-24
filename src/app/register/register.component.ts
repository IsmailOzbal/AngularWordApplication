import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { InsertUserService } from '../shared/services/insert-user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  RegisterForm: FormGroup;
  user: any;
  constructor(
    private spinner: NgxSpinnerService,
    private router: Router,
    private formBuilder: FormBuilder,
    private inserUser:InsertUserService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.RegisterForm = this.formBuilder.group({
      Name: ['', Validators.required],
      Surname: ['', Validators.required],
      Username: ['', [Validators.required, Validators.minLength(6)]],
      Email: ['', Validators.email],
      Password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.RegisterForm.invalid) {
      return;
    }
    this.spinner.show();
    this.inserUser
      .AddUser(this.RegisterForm.value)
      .toPromise()
      .then(res => {
        this.user = res;
        this.spinner.hide();
        this.Success();
      });
  }

  Success() {
    if (this.user !== undefined) {
      this.toastr.success('User added succesfully');
      // tslint:disable-next-line:no-unused-expression
      this.router.navigate(['/login']);
    }
  }
}
