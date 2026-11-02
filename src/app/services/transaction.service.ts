import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Transaction } from '../models/transaction';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TransactionService {
  private apiUrl = 'http://localhost:3000/transactions';
  private transactionsSubject = new BehaviorSubject<Transaction[]>([]);

  transactions$ = this.transactionsSubject.asObservable();
  loading = false;
  error = '';

  constructor(private http: HttpClient) {
    this.loadAll();
  }

  loadAll(): void {
    this.loading = true;
    this.error = '';

    this.http.get<Transaction[]>(this.apiUrl).subscribe({
      next: (transactions) => {
        this.transactionsSubject.next(transactions);
        this.loading = false;
      },
      error: () => {
        this.error = 'Could not load transactions. Is the API running?';
        this.loading = false;
      },
    });
  }

  delete(id: number): void {
    this.http.delete(`${this.apiUrl}/${id}`).subscribe(() => {
      this.transactionsSubject.next(
        this.transactionsSubject.value.filter((t) => t.id !== id),
      );
    });
  }

  add(transaction: Omit<Transaction, 'id'>): void {
    this.http
      .post<Transaction>(this.apiUrl, transaction)
      .subscribe((created) => {
        this.transactionsSubject.next([
          ...this.transactionsSubject.value,
          created,
        ]);
      });
  }

  getById(id: number): Observable<Transaction> {
    return this.http.get<Transaction>(`${this.apiUrl}/${id}`);
  }
}
