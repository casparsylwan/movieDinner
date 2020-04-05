import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FrontComponent } from './components/pages/front/front.component';
import { SeatsComponent } from './components/parts/seats/seats.component';


const routes: Routes = [
  {path:'',component: FrontComponent},
  {path:'seat', component: SeatsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
