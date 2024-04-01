export interface CreditData {
    id: string;
    amount: number | null; 
    balanceAmount: number | null; 
    currency: string;
    createdAt: string;
    term: number | string; 
    status: string;
    userId : string;
  }
  
  export interface transaction  {
    id : string;
    amount : number | null; 
    createdAt : string;
  }
  
  export interface User {
    id: string;
    name: string;
    email: string;
    password : string;
  }
  
  export interface request {
    id : string;
    createdAt: string;
    updatedAt : string;
    email: string;
    name: string;
    amount: number | null;
    currency: string;
    term: number | string; 
    status: string;
    rejectionReason : string;
  }
  export interface transactions{
    balanceAmount : number;
  }
  