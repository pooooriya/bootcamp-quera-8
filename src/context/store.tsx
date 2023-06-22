import React, { createContext, useState } from "react";

export const AppContext = createContext<{
  Checkout: any[];
  setCheckout: React.Dispatch<React.SetStateAction<any[]>>;
}>({
  Checkout: [],
  setCheckout: () => null,
});

interface IAppContextProvider extends React.PropsWithChildren {}
const AppContextProvider: React.FC<IAppContextProvider> = ({
  children,
}): JSX.Element => {
  const [Checkout, setCheckout] = useState<any>([]);
  return (
    <AppContext.Provider value={{ Checkout, setCheckout }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
