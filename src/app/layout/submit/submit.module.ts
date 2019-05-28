import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule, MatCardModule, MatIconModule, MatTableModule } from '@angular/material';
import { StatModule } from '../../shared/modules/stat/stat.module';
import { SubmitRoutingModule } from './submit-routing.module';
import { SubmitComponent } from './submit.component';
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
import { WordtypepopupComponent } from './wordtypepopup/wordtypepopup.component';
@NgModule({
  declarations: [SubmitComponent, WordtypepopupComponent],
  entryComponents: [
    WordtypepopupComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgxSpinnerModule,
    MatDialogModule,
    SubmitRoutingModule,
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
export class SubmitModule {}
