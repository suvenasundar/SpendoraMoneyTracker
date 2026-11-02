import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SummaryComponent } from './components/summary/summary.component';
import { TypeFilterComponent } from './components/type-filter/type-filter.component';
import { TransactionListComponent } from './components/transaction-list/transaction-list.component';
import { TransactionItemComponent } from './components/transaction-item/transaction-item.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SignedAmountPipe } from './pipes/signed-amount.pipe';
import { TotalByTypePipe } from './pipes/total-by-type.pipe';
import { ChildComponent } from './components/child/child.component';
import { ParentComponent } from './components/parent/parent.component';
import { TypeColorDirective } from './directives/type-color.directive';
import { FilterByTypePipe } from './pipes/filter-by-type.pipe';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from './pipes/search.pipe';
import { TransactionFormComponent } from './components/transaction-form/transaction-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { TransactionsComponent } from './pages/transactions/transactions.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TransactionDetailComponent } from './pages/transaction-detail/transaction-detail.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    SummaryComponent,
    TypeFilterComponent,
    TransactionListComponent,
    TransactionItemComponent,
    SignedAmountPipe,
    TotalByTypePipe,
    ChildComponent,
    ParentComponent,
    TypeColorDirective,
    FilterByTypePipe,
    SearchPipe,
    TransactionFormComponent,
    DashboardComponent,
    TransactionsComponent,
    NavbarComponent,
    TransactionDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
