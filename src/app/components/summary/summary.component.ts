import { Component, Input } from '@angular/core';
import { Transaction } from 'src/app/models/transaction';
import { SummaryType } from 'src/app/pipes/total-by-type.pipe';
import { TransactionService } from 'src/app/services/transaction.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent {
  cardItems: SummaryType[] = ['income', 'expense', 'saving', 'balance'];

  constructor(private transactionService: TransactionService) {}
  transactions$ = this.transactionService.transactions$;

  calculateIncome(transactions: Transaction[]) {
    return transactions.filter(t => t.type === 'income').reduce((total, t) => total + t.amount, 0);
  }

  calculateSaving(transactions: Transaction[]) {
    return transactions.filter(t => t.type === 'saving').reduce((total, t) => total + t.amount, 0);
  }

  calculateSavingsRate(transactions: Transaction[]) {
    const income = this.calculateIncome(transactions);
    return income ? this.calculateSaving(transactions) / income : 0;
  }
}
