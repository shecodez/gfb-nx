import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// TODO: move this to correct place
export type Policy = {
  id: string;
  type: string;
  hasAutoIdCard: boolean;
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
    this.policy = { id: 'XYZ_12345671', type: 'auto', hasAutoIdCard: true };
  }

  public viewPolicyAutoIds() {
    this.router.navigate(['autoIds']);
  }
}
