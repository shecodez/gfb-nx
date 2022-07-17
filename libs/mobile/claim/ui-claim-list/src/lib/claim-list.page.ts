import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// TODO: move this to correct place
export type ClaimListItem = {
  id: string;
  type: string;
  status: string;
};

@Component({
  selector: 'gfb-nx-claim-list',
  templateUrl: 'claim-list.page.html',
  styleUrls: ['claim-list.page.scss'],
})
export class ClaimListPageComponent implements OnInit {
  loading = false;
  error = {};
  claimList = [] as ClaimListItem[];
  filteredClaimList = [] as ClaimListItem[];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.claimList = [
      { id: '12345671', type: 'auto', status: 'Approved' },
      { id: '12345672', type: 'life', status: 'In Review' },
      { id: '12345673', type: 'home', status: 'In Review' },
      { id: '12345674', type: 'farm', status: 'Approved' },
      { id: '12345675', type: 'auto', status: 'In Review' },
    ];
    this.filteredClaimList = this.claimList;
  }

  public searchClaims(e?: any) {
    const search = e.target.value;

    if (search.length) {
      this.filteredClaimList = this.claimList.filter((x) =>
        x.id.toLowerCase().includes(search.toLowerCase())
      );
    } else {
      this.filteredClaimList = this.claimList;
    }
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

  public viewClaim() {
    this.router.navigate(['claim/993hss']);
  }
}
