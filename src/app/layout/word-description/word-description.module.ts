import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule, MatCardModule, MatIconModule, MatTableModule } from '@angular/material';
import { StatModule } from '../../shared/modules/stat/stat.module';
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
import { WordDescriptionComponent } from './word-description.component';
import { WordDescriptionRoutingModule } from './word-description-routing.module';
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  declarations: [WordDescriptionComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatDialogModule,
    StatModule,
    MatCardModule,
    WordDescriptionRoutingModule,
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
    NgxSpinnerModule,
    FlexLayoutModule.withConfig({ addFlexToParent: false })
  ]
})
export class WordDescriptionModule {}
