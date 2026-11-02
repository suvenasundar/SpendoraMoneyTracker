import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIconModule } from '@angular/material/icon';
import { TransactionItemComponent } from './transaction-item.component';
import { TypeColorDirective } from 'src/app/directives/type-color.directive';
import { SignedAmountPipe } from 'src/app/pipes/signed-amount.pipe';

describe('TransactionItemComponent', () => {
  let component: TransactionItemComponent;
  let fixture: ComponentFixture<TransactionItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MatIconModule],
      declarations: [TransactionItemComponent, TypeColorDirective, SignedAmountPipe],
    });
    fixture = TestBed.createComponent(TransactionItemComponent);
    component = fixture.componentInstance;
    component.transaction = {
      id: 1,
      title: 'Test income',
      amount: 5000,
      type: 'income',
      category: 'Salary',
      date: '2026-10-20',
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
