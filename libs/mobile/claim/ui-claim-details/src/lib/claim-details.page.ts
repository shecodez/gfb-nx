import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// TODO: move this to correct place
export type Claim = {
  id: string;
  type: string;
  status: string;
};

@Component({
  selector: 'gfb-nx-claim-details',
  templateUrl: 'claim-details.page.html',
  styleUrls: ['claim-details.page.scss'],
})
export class ClaimDetailsPageComponent implements OnInit {
  loading = false;
  error = {};
  claim = {} as Claim;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.claim = { id: '12345675', type: 'auto', status: 'In Review' };
  }

  public getClaimStatusIcon(type: string) {
    switch (type) {
      case 'Approved':
        return { color: 'success', icon: 'checkmark-circle-outline' };
      case 'In Review':
        return { color: 'warning', icon: 'warning-outline' };
      default:
        return { color: '', icon: 'help' };
    }
  }
}
