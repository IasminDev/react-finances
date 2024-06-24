export interface Transaction {
  id: number;
  description: string;
  amount: number;
  status: string;
  date: string;
}

export interface Goal {
  id: number;
  description: string;
  value: number;
  date: string;
}

export interface DecodedToken {
  id: string | null;
  name?: string | null;
  token: string;
}
