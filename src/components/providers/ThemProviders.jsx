import React, { createContext } from 'react';

 export const ThemContext = createContext(null);
 
  const ThemProviders = ({children}) => {
 
     const user = {displayName: 'mostofa Nodi'}

    return (
        <ThemContext.Provider value={user}>
            {children}
        </ThemContext.Provider>
    );
};

export default ThemProviders;