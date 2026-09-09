import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';

export const useTransactions = () => {
  const { state } = useContext(GlobalContext);
  return { transactions: state.transactions };
};