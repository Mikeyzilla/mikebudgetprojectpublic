import { Category } from "./category";
import { User } from "./user";

export interface Budget {
  id: number;
  categories: Category[];   
  user: User;                
  totalIncome: number;
  createdAt: string;      
}