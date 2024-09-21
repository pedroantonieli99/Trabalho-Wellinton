import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './paginainicialitens/paginainicial';
import { SuccessPageComponent } from './pagina2/pagina2';

const routes: Routes = [
  { path: '', component: FormComponent },
  { path: 'page2', component: SuccessPageComponent } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
