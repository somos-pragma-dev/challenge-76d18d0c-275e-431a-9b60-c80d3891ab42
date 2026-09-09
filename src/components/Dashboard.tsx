import React from 'react';
import { GlobalContextProvider } from '../context/GlobalContext';
import { useTransactions } from '../hooks/useTransactions';

const Dashboard: React.FC = () => {
  const { transactions } = useTransactions();

  return (
    <GlobalContextProvider>
      <div>
        <h1>Dashboard</h1>
        <p>Transactions: {transactions.length}</p>
      </div>
    </GlobalContextProvider>
  );
};

export default Dashboard;