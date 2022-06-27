import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// TODO: move this to correct place
export type Unit = {
  year: string;
  model: string;
  make: string;
  VIN: string;
  coverages?: [];
};
export type SubUnit = {
  label: string;
  coverages: string[];
};
export type Driver = {
  name: string;
  discounts?: string[];
};
export type Agent = {
  name: string;
  county: string;
};
export type Policy = {
  id: string;
  policyType: string;
  // Policy Information
  memberNumber: 12345678;
  insuredName: string;
  insuredAddress: {
    houseNumber: string;
    line1: string;
    city: string;
    state: string;
    zipCode: string;
  };
  policyId: string;
  policyDescription: string;
  // Premium & Billing Information
  totalPremium: number;
  billingMethod: string;
  effectiveDate: string;
  expirationDate: string;
  // Drivers
  drivers: Driver[];
  // Coverages
  units: Unit[];
  // Additional Policy Coverages
  subUnits?: SubUnit[];
  // Agent
  agent: Agent;
};

@Component({
  selector: 'gfb-nx-policy',
  templateUrl: 'policy.page.html',
  styleUrls: ['policy.page.scss'],
})
export class PolicyPageComponent implements OnInit {
  loading = false;
  error = {};
  policy = {} as Policy;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.policy = {
      id: 'XYZ_12345671',
      memberNumber: 12345678,
      insuredName: 'Sterling Malory Archer',
      insuredAddress: {
        houseNumber: '123',
        line1: 'Some Address',
        city: 'Macon',
        state: 'GA',
        zipCode: '12345',
      },
      policyId: 'ABC 1234567',
      policyType: 'Auto',
      policyDescription: 'Business Auto',
      totalPremium: 15330033,
      billingMethod: 'billing',
      effectiveDate: '1/1/1111 AM',
      expirationDate: '1/2/1111 PM',
      drivers: [
        { name: 'Sterling Malory Archer' },
        { name: 'Lana Anthony Kane', discounts: ['Good Driver'] },
      ],
      units: [
        {
          year: '1970',
          model: 'Chevrolet',
          make: 'El Camino',
          VIN: '12345678910',
          coverages: [],
        },
      ],
      agent: { name: 'Malory Archer', county: 'Albany' },
    };
  }

  public viewPolicyAutoIds() {
    this.router.navigate(['autoIds']);
  }
}
