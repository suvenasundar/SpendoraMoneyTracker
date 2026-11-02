import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MatIconModule } from '@angular/material/icon';
import { AppComponent } from './app.component';
import { SummaryComponent } from './components/summary/summary.component';
import { TypeFilterComponent } from './components/type-filter/type-filter.component';
import { TransactionListComponent } from './components/transaction-list/transaction-list.component';
import { TransactionItemComponent } from './components/transaction-item/transaction-item.component';
import { TypeColorDirective } from './directives/type-color.directive';
import { SignedAmountPipe } from './pipes/signed-amount.pipe';
import { TotalByTypePipe } from './pipes/total-by-type.pipe';

describe('AppComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [RouterTestingModule, MatIconModule],
    declarations: [
      AppComponent,
      SummaryComponent,
      TypeFilterComponent,
      TransactionListComponent,
      TransactionItemComponent,
      TypeColorDirective,
      SignedAmountPipe,
      TotalByTypePipe,
    ],
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'spendora'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('spendora');
  });

  it('should render the page title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain('spendora');
  });
});
