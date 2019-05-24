import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule, MatCardModule, MatIconModule, MatTableModule } from '@angular/material';
import { MatGridListModule } from '@angular/material/grid-list';
import { QuestionModule  } from '../../shared/modules/question/question.module';
import { StatModule } from '../../shared/modules/stat/stat.module';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { NgxSpinnerModule } from 'ngx-spinner';
@NgModule({
    imports: [
        CommonModule,
        NgxSpinnerModule,
        DashboardRoutingModule,
        MatGridListModule,
        StatModule,
        QuestionModule,
        MatCardModule,
        MatCardModule,
        MatTableModule,
        MatButtonModule,
        MatIconModule,
        FlexLayoutModule.withConfig({addFlexToParent: false})
    ],
    declarations: [DashboardComponent]
})
export class DashboardModule {}
