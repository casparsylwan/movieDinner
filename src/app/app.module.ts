import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FrontComponent } from './components/pages/front/front.component';
import { AboutComponent } from './components/pages/about/about.component';
import { TopnavComponent } from './components/parts/topnav/topnav.component';
import { MenuComponent } from './components/parts/menu/menu.component';
import { MainfrontComponent } from './components/parts/mainfront/mainfront.component';
import { FooterComponent } from './components/parts/footer/footer.component';
import { SeatsComponent } from './components/parts/seats/seats.component';

import { ClickColorDirective } from './components/models/click-color';
import { RestaurantComponent } from './components/parts/restaurant/restaurant.component';

@NgModule({
  declarations: [
    AppComponent,
    FrontComponent,
    AboutComponent,
    TopnavComponent,
    MenuComponent,
    MainfrontComponent,
    FooterComponent,
    SeatsComponent,
    ClickColorDirective,
    RestaurantComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
