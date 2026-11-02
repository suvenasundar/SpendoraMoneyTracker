export interface Transaction {
    id:number;
    title:string;
    amount:number;
    type:TransactionType;
    category:string;
    date:string
}

export type TransactionType = 'income' | 'expense' | 'saving';

export type SummaryType = TransactionType | 'balance';