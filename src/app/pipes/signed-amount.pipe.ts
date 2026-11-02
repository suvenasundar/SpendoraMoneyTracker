import { Pipe, PipeTransform } from '@angular/core';
import { Transaction } from '../models/transaction';

@Pipe({
  name: 'signedAmount'
})
export class SignedAmountPipe implements PipeTransform {

  transform(transaction:Transaction): string {
    const amount = '₹' + transaction.amount.toLocaleString('en-IN');
    switch (transaction.type) {
      case 'income':
        return '+ ' + amount;
      case 'expense':
        return '- ' + amount;
      case 'saving':
        return '→ ' + amount;
    }

  }

}
