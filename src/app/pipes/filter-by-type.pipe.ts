import { Pipe, PipeTransform } from '@angular/core';
import { Transaction, TransactionType } from '../models/transaction';
@Pipe({
  name: 'filterByType'
})
export class FilterByTypePipe implements PipeTransform {

  transform(transactions: Transaction[], type: 'all' | TransactionType):  Transaction[]{
    if(type === 'all') return transactions;
    return transactions.filter(t => t.type === type)
  }

}
