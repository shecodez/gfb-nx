import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// TODO: move this to correct place
export type ClaimCmsPageItem = {
  html: string;
};

@Component({
  selector: 'gfb-nx-claim-cms',
  templateUrl: 'claim-cms.page.html',
  styleUrls: ['claim-cms.page.scss'],
})
export class ClaimCmsPageComponent implements OnInit {
  loading = false;
  error = {};
  claimPages = [] as ClaimCmsPageItem[];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.claimPages = [
      { html: '<h1>Claim Information (from CMS)</h1>' },
      { html: '<h1>ERA (from CMS)</h1>' },
    ];
  }

  public viewClaim() {
    this.router.navigate(['claim/info']);
  }
}
