import * as React from 'react';

// Thanks to https://levelup.gitconnected.com/usetypescript-a-complete-guide-to-react-hooks-and-typescript-db1858d1fb9c

interface IGlobalContext {
  isLoggedIn: boolean;
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}

// The defaultValue argument is only used when a component
// does not have a matching Provider above it in the tree.
const GlobalContext = React.createContext<IGlobalContext>({
  isLoggedIn: false,
  setIsLoggedIn: () => {}
});

const GlobalContextProvider: React.FC = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = React.useState<boolean>(false);

  return (
    <GlobalContext.Provider
      value={{ isLoggedIn, setIsLoggedIn }}
      children={children}
    />
  );
};

export default GlobalContextProvider;

// Custom Hook (function whose name starts with ”use”
// and that may call other Hooks).
export function useGlobalContext(): IGlobalContext {
  return React.useContext(GlobalContext);
}
