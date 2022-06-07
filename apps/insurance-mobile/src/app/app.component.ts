import { Component } from '@angular/core';

@Component({
  selector: 'gfb-nx-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  appPages = [
    { label: 'Get a Quote', url: '/quote' },
    { label: 'Find an Agent', url: '/contact' },
    { label: 'Make a Payment', url: '/payments' },
    { label: 'Latest News', url: '/news' },
    { label: 'Support', url: '/support' },
    { label: 'About Us', url: 'about' },
    { label: 'Products', url: '/products' },
    { label: 'Contact Us', url: '/contact' },
    { label: 'Claims', url: '/account/claims', isAuthPage: true },
    { label: 'Membership', url: '/account/membership', isAuthPage: true },
    { label: 'Policies', url: '/account/policies', isAuthPage: true },
  ];
  fab = { label: 'Report a Claim', url: '/claims/new' };

  constructor() {}
}
