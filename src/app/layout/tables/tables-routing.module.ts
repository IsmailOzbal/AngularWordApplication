import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TablesComponent } from './tables.component';
import { WorddetailComponent } from './worddetail/worddetail.component';

const routes: Routes = [
    {
        path: '',
        component: TablesComponent
    },
    {
        path: 'worddetail',
        component: WorddetailComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TablesRoutingModule {}
