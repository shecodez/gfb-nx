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
  appPages = [
    { isLabel: true, label: 'Quick Links' },
    { title: 'Home', icon: 'home', url: '/home' },
    { title: 'Get a Quote', icon: 'chatbubble', url: '/quote' },
    { title: 'Find an Agent', icon: 'person', url: '/contact' },
    { title: 'Latest News', icon: 'newspaper', url: '/news' },
    { title: 'Support', icon: 'help-buoy', url: '/support' },
    { title: 'About Us', icon: 'people', url: 'about' },
    { title: 'Products', icon: 'albums', url: '/products' },
    { title: 'Contact Us', icon: 'paper-plane', url: '/contact' },

    { isLabel: true, label: 'Payments' },
    { title: 'Make a Payment', icon: 'wallet', url: '/account/invoices' },

    { isLabel: true, label: 'Claims' },
    {
      title: 'Claims',
      icon: 'archive',
      url: '/account/claims',
      isAuthPage: true,
    },

    { isLabel: true, label: 'Membership' },
    {
      title: 'Membership',
      icon: 'id-card',
      url: '/account/membership',
      isAuthPage: true,
    },

    { isLabel: true, label: 'Policies' },
    {
      title: 'Policies',
      icon: 'list',
      url: '/account/policies',
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
