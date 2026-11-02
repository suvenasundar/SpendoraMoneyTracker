import { Component,EventEmitter,Input, Output } from '@angular/core';
import { TransactionType } from 'src/app/models/transaction';
@Component({
  selector: 'app-type-filter',
  templateUrl: './type-filter.component.html',
  styleUrls: ['./type-filter.component.scss']
})
export class TypeFilterComponent {
  filters:('all' |TransactionType)[] = ['all', 'income', 'saving', 'expense'];
  @Input() selected: 'all' | TransactionType  = 'all';
  @Output() selectedChange = new EventEmitter<'all' | TransactionType>();
}
