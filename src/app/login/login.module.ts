import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule, MatCheckboxModule, MatInputModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
    imports: [
        CommonModule,
        LoginRoutingModule,
        NgxSpinnerModule,
        FormsModule,
        ReactiveFormsModule,
        MatInputModule,
        MatCheckboxModule,
        MatButtonModule,
        FlexLayoutModule.withConfig({addFlexToParent: false})
    ],
    declarations: [LoginComponent]
})
export class LoginModule {}
