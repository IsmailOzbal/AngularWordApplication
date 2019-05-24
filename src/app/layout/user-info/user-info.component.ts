import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/shared/services/login.service';
import { User } from 'src/app/shared/Model/User';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
import { ChangePasswordService } from 'src/app/shared/services/change-password.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {
  userId: string;
  user: User;
  registerForm: FormGroup;
  submitted = false;

  // tslint:disable-next-line:max-line-length
  constructor(private spinner: NgxSpinnerService, private loginservice: LoginService, private changePassword: ChangePasswordService, private formBuilder: FormBuilder, private toastrService: ToastrService) {

    this.registerForm = this.formBuilder.group(
      {
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', Validators.required]
      },
      {
        validator: MustMatch('password', 'confirmPassword')
      }
    );

    this.userId = localStorage.getItem('userid');

    this.spinner.show();

    this.loginservice
      .GetUser(this.userId)
      .toPromise()
      .then(res => {
        console.log(res[0]);
        this.user = res[0];
        this.spinner.hide();
      });
  }

  ngOnInit() {

  }

  get f() {
    return this.registerForm.controls;
  }

  ChangePassword() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    this.spinner.show();
    this.changePassword
      .ChangePassword(+localStorage.getItem('userid'), this.registerForm.value.password)
      .toPromise()
      .then(res => {
        this.user = res;
        this.spinner.hide();
        this.Success();
      });
  }

  Success() {
    if (this.user !== undefined) {
      this.toastrService.success('User password changed succesfully');
    }
  }
}

export function MustMatch(controlName: string, matchingControlName: string) {
  return (formGroup: FormGroup) => {
    const control = formGroup.controls[controlName];
    const matchingControl = formGroup.controls[matchingControlName];

    if (matchingControl.errors && !matchingControl.errors.mustMatch) {
      // return if another validator has already found an error on the matchingControl
      return;
    }

    // set error on matchingControl if validation fails
    if (control.value !== matchingControl.value) {
      matchingControl.setErrors({ mustMatch: true });
    } else {
      matchingControl.setErrors(null);
    }
  };
}
