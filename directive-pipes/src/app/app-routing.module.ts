import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DirectivePageComponent } from './components/directive-page/directive-page.component';
import { PipePageComponent } from './components/pipe-page/pipe-page.component';

const routes: Routes = [
  { path: 'pipes', component: PipePageComponent },
  { path: 'directives', component: DirectivePageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
