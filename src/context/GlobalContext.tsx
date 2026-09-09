interface GlobalContextProps {
  children: React.ReactNode;
}

const GlobalContext = createContext<{
  state: GlobalState;
  dispatch: React.Dispatch<GlobalAction>;
} | undefined>(undefined);

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

export const GlobalContextProvider: React.FC<GlobalContextProps> = ({ children }) => {
  const [state, dispatch] = useReducer(globalReducer, {
    transactions: [],
    balances: {},
    notifications: [],
  });

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error('useGlobalContext must be used within a GlobalContextProvider');
  }
  return context;
};