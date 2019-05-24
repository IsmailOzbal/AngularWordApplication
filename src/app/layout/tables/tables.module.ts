import { CommonModule } from '@angular/common';
import { NgModule, OnInit } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material';
import {
    MatBottomSheetModule, MatButtonModule, MatCardModule, MatDialogModule, MatFormFieldModule,
    MatIconModule, MatInputModule, MatListModule, MatOptionModule, MatPaginatorModule,
    MatProgressBarModule, MatRadioModule, MatSelectModule, MatSliderModule, MatSnackBarModule,
    MatTooltipModule
} from '@angular/material';
import { TablesRoutingModule } from './tables-routing.module';
import { TablesComponent } from './tables.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { WorddetailComponent } from './worddetail/worddetail.component';
import { SwiperModule } from 'ngx-useful-swiper';
@NgModule({
    imports: [
        CommonModule,
        TablesRoutingModule,
        MatTableModule,
        MatFormFieldModule,
        MatPaginatorModule,
        MatInputModule,
        MatBottomSheetModule,
        MatSnackBarModule,
        MatCardModule,
        ReactiveFormsModule,
        MatDialogModule,
        MatListModule,
        MatButtonModule,
        MatOptionModule,
        MatSelectModule,
        MatTooltipModule,
        MatRadioModule,
        MatSliderModule,
        MatProgressBarModule,
        MatPaginatorModule,
        MatIconModule,
        SwiperModule,
        MatDialogModule,
        FlexLayoutModule.withConfig({addFlexToParent: true}),
        FormsModule,
        NgxSpinnerModule
    ],
    declarations: [TablesComponent, WorddetailComponent],


})
export class TablesModule  {

}
