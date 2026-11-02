import { Component, EventEmitter, Output } from '@angular/core';
import { Transaction, TransactionType } from 'src/app/models/transaction';
@Component({
  selector: 'app-transaction-form',
  templateUrl: './transaction-form.component.html',
  styleUrls: ['./transaction-form.component.scss']
})
export class TransactionFormComponent {

  @Output() save = new EventEmitter <Omit <Transaction, 'id'>> ();
  @Output() cancel = new EventEmitter <void> ();
  newTransaction : Omit <Transaction, 'id'> = {
    title: '',
    amount: 0,
    type: 'expense',
    category: '',
    date:new Date().toISOString().slice(0,10)
  };
  
  categories: Record <TransactionType, string[]> = {
    income: ['Salary', 'Freelance', 'Interest', 'Other'],
    expense: ['Food', 'Bills', 'Travel', 'Shopping', 'Health', 'Other'],
    saving: ['Emergency Fund', 'Mutual Fund', 'RD', 'FD', 'Other'],
  }

  onSubmit(){
    this.save.emit({...this.newTransaction})
  }


}
