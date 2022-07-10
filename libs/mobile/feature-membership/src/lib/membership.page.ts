import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// TODO: move this to correct place
export type MembershipItem = {
  id: string;
  memberName: string;
  status: string;
  expirationDate: string;
  joinYear: string;
  countyName: string;
  isPrimary?: boolean;
};

@Component({
  selector: 'gfb-nx-membership',
  templateUrl: 'membership.page.html',
  styleUrls: ['membership.page.scss'],
})
export class MembershipPageComponent implements OnInit {
  loading = false;
  error = {};
  memberships = [] as MembershipItem[];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.memberships = [
      {
        id: '12345678',
        status: 'Billed',
        expirationDate: '11/02/2022',
        memberName: 'Sterling Archer',
        joinYear: '2020',
        countyName: 'Albany',
        isPrimary: true,
      },
      {
        id: '87654321',
        status: 'Expired',
        expirationDate: '01/02/2022',
        memberName: 'Woodhouse',
        joinYear: '2020',
        countyName: 'Albany',
      },
    ];
  }

  public getMembershipStatusIcon(type: string) {
    switch (type) {
      case 'Billed':
        return { color: 'success', icon: 'checkmark-circle-outline' };
      case 'Expired':
        return { color: 'danger', icon: 'warning-outline' };
      default:
        return { color: '', icon: 'help' };
    }
  }

  public viewMembershipCard() {
    this.router.navigate(['documents-membership-card']);
  }
}
