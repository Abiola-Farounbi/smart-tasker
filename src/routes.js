import { createContext, useContext, useState } from 'react';

const RouteContext = createContext();

// Route Provider
const RouteProvider = ({ children }) => {
  const [currentRoute, setCurrentRoute] = useState('todo');

  const navigate = (route) => {
    setCurrentRoute(route);
  };

  return (
    <RouteContext.Provider value={{ currentRoute, navigate }}>
      {children}
    </RouteContext.Provider>
  );
};

// Custom hook for routing
const useRoute = () => {
  const context = useContext(RouteContext);
  if (!context) {
    throw new Error('useRoute must be used within a RouteProvider');
  }
  return context;
};

export { RouteProvider, useRoute };