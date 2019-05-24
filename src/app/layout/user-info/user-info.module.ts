import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule, MatCardModule, MatIconModule, MatTableModule } from '@angular/material';
import { StatModule } from '../../shared/modules/stat/stat.module';
import { UserInfoRoutingModule } from './user-info-routing.module';
import { UserInfoComponent } from './user-info.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatBottomSheetModule,
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule,
  MatListModule,
  MatOptionModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatRadioModule,
  MatSelectModule,
  MatSliderModule,
  MatSnackBarModule,
  MatTooltipModule
} from '@angular/material';
import { NgxSpinnerModule } from 'ngx-spinner';
@NgModule({
  declarations: [UserInfoComponent],
  imports: [
    CommonModule,
    NgxSpinnerModule,
    MatDialogModule,
    UserInfoRoutingModule,
    StatModule,
    MatCardModule,
    MatCardModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatOptionModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatRadioModule,
    MatSelectModule,
    MatSliderModule,
    MatSnackBarModule,
    MatTooltipModule,
    MatBottomSheetModule,
    FlexLayoutModule.withConfig({ addFlexToParent: false })
  ]

})
export class UserInfoModule {}
