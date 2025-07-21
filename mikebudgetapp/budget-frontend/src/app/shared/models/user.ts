import { Budget } from "./budget";

export interface User {
  id: number;
  budgets: Budget[];
  username: string;
  password?: string;
  income: number;
  dependents: number;
  location: string;
  occupation: string;
}
