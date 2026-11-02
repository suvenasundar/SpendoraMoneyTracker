import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Transaction } from 'src/app/models/transaction';
import { TypeColorDirective } from 'src/app/directives/type-color.directive';
@Component({
  selector: 'app-transaction-item',
  templateUrl: './transaction-item.component.html',
  styleUrls: ['./transaction-item.component.scss'],
})
export class TransactionItemComponent {
  @Input() transaction!: Transaction;
  @Output() deleteTransaction = new EventEmitter<Transaction> ();

}
