import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';



import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
/* import { AboutPageModule } from './about/about.module';
import { ContactPageModule } from './contact/contact.module';
import { MenuPageModule } from './menu/menu.module';
import { HomePageModule } from './home/home.module'; */

@NgModule({
  declarations: [AppComponent,               
  ],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
    /* AboutPageModule,
    ContactPageModule,
    MenuPageModule,
    HomePageModule */
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
