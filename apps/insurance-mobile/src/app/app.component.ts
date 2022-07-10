import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
// import { StatusBar } from '@ionic-native/status-bar/ngx'; npm i @ionic-native/status-bar
// import { SplashScreen } from '@ionic-native/splash-screen/ngx'; npm i @ionic-native/splash-screen

@Component({
  selector: 'gfb-nx-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  activeIndex = -1;
  activePageTitle = '';
  // TODO: make each section collapsible
  appPages = [
    { isLabel: true, label: 'Main Menu' },
    { title: 'Home', icon: 'home', url: '/home' },
    // { title: 'Get a Quote', icon: 'chatbubble', url: '/quote' },
    // { title: 'Find an Agent', icon: 'person', url: '/contact' },
    // { title: 'Blog', icon: 'newspaper', url: '/news' },
    // { title: 'About', icon: 'people', url: 'about' },
    // { title: 'Products', icon: 'albums', url: '/products' },
    // { title: 'Contact', icon: 'paper-plane', url: '/contact' },

    { isLabel: true, label: 'Claims' },
    {
      title: 'Claims',
      icon: 'archive',
      url: '/claims',
      isAuthPage: true,
    },
    {
      title: 'File a Claim',
      icon: 'create',
      url: '/claims/new',
      isAuthPage: true,
    },

    { isLabel: true, label: 'Account' },
    {
      title: 'Membership',
      icon: 'person-circle',
      url: '/account/membership',
      isAuthPage: true,
    },
    {
      title: 'Policies',
      icon: 'list',
      url: '/account/policies',
      isAuthPage: true,
    },
    { title: 'Payments', icon: 'card', url: '/account/payments' },

    { isLabel: true, label: 'Documents' },
    {
      title: 'Declarations',
      icon: 'documents',
      url: '/documents/declarations',
      isAuthPage: true,
    },
    {
      title: 'Membership Card',
      icon: 'id-card',
      url: '/documents/membership-card',
      isAuthPage: true,
    },
    {
      title: 'Auto ID Cards',
      icon: 'albums',
      url: '/documents/auto-ids',
      isAuthPage: true,
    },
  ];

  fab = { title: 'File a Claim', url: '/claims/new' };

  constructor(private platform: Platform) {}

  ngOnInit(): void {
    this.platform.ready().then(() => {
      //this.statusBar.styleDefault();
      //this.splashScreen.hide();
    });
  }
}
