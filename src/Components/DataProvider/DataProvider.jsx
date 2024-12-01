import { createContext, useReducer } from "react";

export const DataContext = createContext();

export const DataProvider = ({ children, reducer, initialState }) => {
  const value = useReducer(reducer, initialState); // [state, dispatch]
  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

// import { createContext, useReducer } from "react";

// export const DataContext = createContext();

// export const DataProvider = ({ children, reducer, initialState }) => {
//   return (
//     <DataContext.Provider value={useReducer(reducer, initialState)}>
//       {children}
//     </DataContext.Provider>
//   );
// };
