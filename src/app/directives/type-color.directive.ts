import { Directive, HostBinding, Input } from '@angular/core';
import { SummaryType } from '../models/transaction';
@Directive({
  selector: '[appTypeColor]'
})
export class TypeColorDirective {
  @Input() appTypeColor! : SummaryType ;
  @HostBinding('style.color')
  get color(): string{
    switch(this.appTypeColor){
      case 'income':
        return 'var(--income)';
      case 'expense':
        return 'var(--expense)';
      case 'saving':
        return 'var(--saving)';
      default:
        return '';
    }
  }

}
