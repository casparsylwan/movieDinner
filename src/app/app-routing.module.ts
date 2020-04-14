import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FrontComponent } from './components/pages/front/front.component';
import { SeatsComponent } from './components/parts/seats/seats.component';
import { RestaurantComponent } from './components/parts/restaurant/restaurant.component';
import { CheckoutComponent } from './components/parts/checkout/checkout.component';
import { EvalorderComponent } from './components/parts/evalorder/evalorder.component';


const routes: Routes = [
  {path:'',component: FrontComponent},
  {path:'seat', component: SeatsComponent},
  {path: 'restu', component: RestaurantComponent},
  {path: 'checkout', component: CheckoutComponent},
  {path: 'eval' , component: EvalorderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
