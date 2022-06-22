import { Component, OnInit } from '@angular/core';

// TODO: move this to correct place
export type InvoiceListItem = {
  id: string;
  dueDate: string;
  balanceDue: number;
  billType: string;
  accountId: string;
  note?: string;
};

@Component({
  selector: 'gfb-nx-invoices',
  templateUrl: 'invoices.page.html',
  styleUrls: ['invoices.page.scss'],
})
export class InvoicesPageComponent implements OnInit {
  loading = false;
  error = {};
  invoiceList = [] as InvoiceListItem[];
  totalInvoices = 1;

  currentPage = 1;
  itemsPerPage = 3;

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() {}

  ngOnInit(): void {
    this.invoiceList = [
      {
        id: '1',
        dueDate: '6/20/2022',
        balanceDue: 120058,
        accountId: 'ACC50012341',
        billType: 'Insurance Premium',
      },
      {
        id: '2',
        dueDate: '6/24/2022',
        balanceDue: 3500,
        accountId: 'MBR12345678',
        billType: 'Membership Fee',
      },
      {
        id: '3',
        dueDate: '6/27/2022',
        balanceDue: 0,
        accountId: 'ACC50012343',
        billType: 'Insurance Premiums',
      },
      {
        id: '4',
        dueDate: '6/18/2022',
        balanceDue: 8300,
        accountId: 'ACC50012342',
        billType: 'Insurance Premium',
      },
      {
        id: '5',
        dueDate: '6/24/2022',
        balanceDue: 3000,
        accountId: 'POLABC1234561',
        billType: 'Insurance Premium',
      },
      {
        id: '6',
        dueDate: '6/24/2022',
        balanceDue: 1550,
        accountId: 'POLOP-1234562',
        billType: 'Insurance Premium',
      },
      {
        id: '7',
        dueDate: '6/19/2022',
        balanceDue: 50,
        accountId: 'MBR12345678',
        billType: 'Membership Fee',
      },
    ];

    this.totalInvoices = this.invoiceList.length;
  }

  // src: https://stackoverflow.com/a/9685692
  countDaysDueFromToday(dueDate: string): number {
    const due = new Date(dueDate); // month is zero based
    const now = new Date();

    // 24 hours, 60 minutes, 60 seconds, 1000 milliseconds
    return (
      Math.floor((due.getTime() - now.getTime()) / (1000 * 60 * 60 * 24)) + 1
    ); // round the amount of days
  }

  public isPastDue(dueDate: string): boolean {
    return this.countDaysDueFromToday(dueDate) < 0;
  }

  public dueText(dueDate: string): string {
    const days = this.countDaysDueFromToday(dueDate);
    if (days < 0) return 'Past Due';
    return days === 0 ? 'Due Today ⏰' : `Due in ${days} day(s)`;
  }

  totalPages() {
    return Math.ceil(this.totalInvoices / this.itemsPerPage);
  }

  public paginatedInvoiceList(): InvoiceListItem[] {
    return this.invoiceList.slice(
      (this.currentPage - 1) * this.itemsPerPage,
      this.currentPage * this.itemsPerPage
    );
  }

  public prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  public nextPage() {
    if (this.currentPage < this.totalPages()) {
      this.currentPage++;
    }
  }
}
