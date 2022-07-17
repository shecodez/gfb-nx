import { Component, OnInit } from '@angular/core';

// TODO: move this to correct place
export type Claim = {
  id: string;
  type: string;
  status: string;
};

@Component({
  selector: 'gfb-nx-claims',
  templateUrl: 'claim-form.page.html',
  styleUrls: ['claim-form.page.scss'],
})
export class ClaimFormPageComponent implements OnInit {
  loading = false;
  error = {};
  claim = {} as Claim;

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() {}

  ngOnInit(): void {
    this.claim = { id: '12345671', type: 'auto', status: 'Approved' };
  }
}
