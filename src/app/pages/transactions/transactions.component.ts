import { Component } from '@angular/core';
import { TransactionType, Transaction } from 'src/app/models/transaction';
import { TransactionService } from 'src/app/services/transaction.service';
@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent {
  selectedType: 'all' | TransactionType = 'all';
  searchText: string = '';
  showForm = false;
  constructor(public transactionService: TransactionService) {}

  transactions$ = this.transactionService.transactions$;

  deleteTransaction(transaction: Transaction): void {
    this.transactionService.delete(transaction.id);
  }
  
  addTransaction(transaction: Omit<Transaction , 'id'>): void{
    this.transactionService.add(transaction);
    this.showForm = false;
  }

}
