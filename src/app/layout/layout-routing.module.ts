import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: '',
                redirectTo: 'dashboard'
            },
            {
                path: 'dashboard',
                loadChildren: './dashboard/dashboard.module#DashboardModule'
            },
            {
                path: 'charts',
                loadChildren: './charts/charts.module#ChartsModule'
            },
            {
                path: 'tables',
                loadChildren: './tables/tables.module#TablesModule'
            },
            {
                path: 'submit',
                loadChildren: './submit/submit.module#SubmitModule'
            },
            {
               path: 'user-info',
               loadChildren: './user-info/user-info.module#UserInfoModule'
            },
            {
                path: 'word-description',
                loadChildren: './word-description/word-description.module#WordDescriptionModule'
            },
            {
                path: 'exam',
                loadChildren: './exam/exam.module#ExamModule'
            }

        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {}
