import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// TODO: move this to correct place
export type PolicyListItem = {
  id: string;
  type: string;
  hasAutoIdCard: boolean;
};

@Component({
  selector: 'gfb-nx-policies',
  templateUrl: 'policies.page.html',
  styleUrls: ['policies.page.scss'],
})
export class PoliciesPageComponent implements OnInit {
  loading = false;
  error = {};
  policyList = [] as PolicyListItem[];
  filteredPolicyList = [] as PolicyListItem[];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.policyList = [
      { id: 'XYZ_12345671', type: 'auto', hasAutoIdCard: true },
      { id: 'ABC_12345672', type: 'life', hasAutoIdCard: false },
      { id: 'DFE_12345673', type: 'home', hasAutoIdCard: false },
      { id: 'LMN_12345674', type: 'farm', hasAutoIdCard: false },
      { id: 'OP_12345675', type: 'auto', hasAutoIdCard: false },
      { id: '12345679', type: 'broker', hasAutoIdCard: false },
    ];
    this.filteredPolicyList = this.policyList;
  }

  public searchPolicies(e?: any) {
    const search = e.target.value;

    if (search.length) {
      this.filteredPolicyList = this.policyList.filter((x) =>
        x.id.toLowerCase().includes(search.toLowerCase())
      );
    } else {
      this.filteredPolicyList = this.policyList;
    }
  }

  public getPolicyIcon(type: string) {
    switch (type) {
      case 'auto':
        return 'car-sport';
      case 'life':
        return 'heart';
      case 'home':
        return 'home';
      case 'farm':
        return 'storefront';
      default:
        return 'help';
    }
  }

  public viewPolicy() {
    this.router.navigate(['policy']);
  }
}
