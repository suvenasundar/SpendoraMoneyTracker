import { Component } from '@angular/core';
import { Transaction } from 'src/app/models/transaction';
import { TransactionService } from 'src/app/services/transaction.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-transaction-detail',
  templateUrl: './transaction-detail.component.html',
  styleUrls: ['./transaction-detail.component.scss'],
})
export class TransactionDetailComponent {
  transaction$: Observable<Transaction>;

  constructor(
    private route: ActivatedRoute,
    private transactionService: TransactionService,
    private router: Router,
  ) {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.transaction$ = this.transactionService.getById(id);
  }

  delete(id: number): void {
    this.transactionService.delete(id);
    this.router.navigate(['/transactions']);
  }
}
