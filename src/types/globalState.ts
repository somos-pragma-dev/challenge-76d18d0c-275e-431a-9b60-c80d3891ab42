export interface GlobalState {
  transactions: any[];
  balances: Record<string, number>;
  notifications: any[];
}

export type GlobalAction =
  | { type: 'SET_TRANSACTIONS'; payload: any[] }
  | { type: 'SET_BALANCES'; payload: Record<string, number> }
  | { type: 'SET_NOTIFICATIONS'; payload: any[] };