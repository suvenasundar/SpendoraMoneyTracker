import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIconModule } from '@angular/material/icon';
import { TransactionListComponent } from './transaction-list.component';
import { TransactionItemComponent } from '../transaction-item/transaction-item.component';
import { TypeColorDirective } from 'src/app/directives/type-color.directive';
import { SignedAmountPipe } from 'src/app/pipes/signed-amount.pipe';

describe('TransactionListComponent', () => {
  let component: TransactionListComponent;
  let fixture: ComponentFixture<TransactionListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MatIconModule],
      declarations: [
        TransactionListComponent,
        TransactionItemComponent,
        TypeColorDirective,
        SignedAmountPipe,
      ],
    });
    fixture = TestBed.createComponent(TransactionListComponent);
    component = fixture.componentInstance;
    component.transactions = [];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
