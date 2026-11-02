import { Pipe, PipeTransform } from '@angular/core';

import { TransactionType, Transaction } from '../models/transaction';

export type SummaryType = TransactionType | 'balance';
@Pipe({
  name: 'totalByType'
})
export class TotalByTypePipe implements PipeTransform {

  transform(transactions: Transaction[], type: SummaryType): number {
    if (type === 'balance') {
      return this.sum(transactions, 'income')
           - this.sum(transactions, 'expense')
           - this.sum(transactions, 'saving');
    }
    return this.sum(transactions, type);
  }

  private sum(transactions: Transaction[], type: TransactionType): number {
    return transactions
      .filter(t => t.type === type)
      .reduce((total, t) => total + t.amount, 0);
  }

}
