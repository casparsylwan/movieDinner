import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FrontComponent } from './components/pages/front/front.component';
import { SeatsComponent } from './components/parts/seats/seats.component';
import { RestaurantComponent } from './components/parts/restaurant/restaurant.component';
import { CheckoutComponent } from './components/parts/checkout/checkout.component';


const routes: Routes = [
  {path:'',component: FrontComponent},
  {path:'seat', component: SeatsComponent},
  {path: 'restu', component: RestaurantComponent},
  {path: 'checkout', component: CheckoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
