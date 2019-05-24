import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ExamComponent } from './exam.component';
import { ExamlistComponent } from './examlist/examlist.component';

const routes: Routes = [
    {
        path: 'examlist',
        component: ExamlistComponent
    },
    {
        path: '',
        component: ExamComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ExamRoutingModule {}
