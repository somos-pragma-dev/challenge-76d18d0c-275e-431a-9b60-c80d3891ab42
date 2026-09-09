import React from 'react';
import { render } from '@testing-library/react';
import { GlobalContextProvider } from '../src/context/GlobalContext';
import Dashboard from '../src/components/Dashboard';

describe('GlobalContext', () => {
  test('renders Dashboard component', () => {
    render(
      <GlobalContextProvider>
        <Dashboard />
      </GlobalContextProvider>
    );
  });
});