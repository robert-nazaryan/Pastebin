import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTextBlockComponent } from './add-text-block/add-text-block.component';
import { TextBlockContentComponent } from './text-block-content/text-block-content.component';

const routes: Routes = [
  { path: 'add-text-block', component: AddTextBlockComponent },
  { path: 'text-block/:uniqueKey', component: TextBlockContentComponent },
  { path: '', redirectTo: '/add-text-block', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
