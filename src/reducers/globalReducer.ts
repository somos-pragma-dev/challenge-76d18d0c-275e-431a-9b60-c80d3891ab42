import { GlobalState, GlobalAction } from '../types/globalState';

export const globalReducer = (state: GlobalState, action: GlobalAction): GlobalState => {
  switch (action.type) {
    case 'SET_TRANSACTIONS':
      return {...state, transactions: action.payload };
    case 'SET_BALANCES':
      return {...state, balances: action.payload };
    case 'SET_NOTIFICATIONS':
      return {...state, notifications: action.payload };
    default:
      return state;
  }
};