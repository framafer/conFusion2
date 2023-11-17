import { Component } from '@angular/core';

import { AboutPage } from 'src/app/about/about.page';
import { MenuPage } from 'src/app/menu/menu.page';
import { ContactPage } from 'src/app/contact/contact.page'; 
import { HomePage } from 'src/app/home/home.page';



@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', icon: 'home', url: '/folder/home', component: HomePage },
    { title: 'About Us', icon: 'information-circle', url: '/folder/about', component: AboutPage },
    { title: 'Menu', icon: 'Menu', url: '/folder/menu', component: MenuPage },
    { title: 'Contact Us', icon: 'paper-plane', url: '/folder/contact', component: ContactPage },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
