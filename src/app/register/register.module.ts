import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule, MatCheckboxModule, MatInputModule, MatIconModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './register.component';
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
    imports: [
        CommonModule,
        RegisterRoutingModule,
        NgxSpinnerModule,
        MatIconModule,
        FormsModule,
        ReactiveFormsModule,
        MatInputModule,
        MatCheckboxModule,
        MatButtonModule,
        FlexLayoutModule.withConfig({addFlexToParent: false})
    ],
    declarations: [RegisterComponent]
})
export class RegisterModule {}
