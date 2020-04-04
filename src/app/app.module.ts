import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FrontComponent } from './components/pages/front/front.component';
import { AboutComponent } from './components/pages/about/about.component';
import { TopnavComponent } from './components/parts/topnav/topnav.component';
import { MenuComponent } from './components/parts/menu/menu.component';
import { MainfrontComponent } from './components/parts/mainfront/mainfront.component';
import { FooterComponent } from './components/parts/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    FrontComponent,
    AboutComponent,
    TopnavComponent,
    MenuComponent,
    MainfrontComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
