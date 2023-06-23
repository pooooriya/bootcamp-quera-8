import React, { createContext, useEffect, useState } from "react";

export const AppContext = createContext<{
  Checkout: any[];
  setCheckout: React.Dispatch<React.SetStateAction<any[]>>;
  User: any;
  setUser: React.Dispatch<React.SetStateAction<any>>;
}>({
  Checkout: [],
  setCheckout: () => null,
  User: {},
  setUser: () => null,
});

interface IAppContextProvider extends React.PropsWithChildren {}
const AppContextProvider: React.FC<IAppContextProvider> = ({
  children,
}): JSX.Element => {
  const [Checkout, setCheckout] = useState<any>([]);
  const [User, setUser] = useState<any>({});

  useEffect(() => {
    const user = localStorage.getItem("username");
    const token = localStorage.getItem("token");
    if (user && token) {
      setUser({
        isAuthenticated: true,
        username: user,
        token,
      });
    }
  }, []);

  return (
    <AppContext.Provider value={{ Checkout, setCheckout, setUser, User }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
