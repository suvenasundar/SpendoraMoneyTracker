import { Pipe, PipeTransform } from '@angular/core';
import { Transaction } from '../models/transaction';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(transactions: Transaction[], text: string): Transaction[] {
    const query = text.trim().toLowerCase();
    if (!query) return transactions
    return transactions.filter(
      (t) => t.title.toLowerCase().includes(query) ||
      t.category.toLowerCase().includes(query)
    )
  }

}
