import { Categoryentry } from "./categoryentry";
import { Budget } from "./budget";

export interface Category {
  id: number;
  name: string;
  entries: Categoryentry[];
  budget: Budget;
}