import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WordDescriptionComponent } from './word-description.component';


const routes: Routes = [
    {
        path: '',
        component: WordDescriptionComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class WordDescriptionRoutingModule {}
