import { useContext, useState } from "react";

import { createContext } from "react";

const ContextGlobal = createContext({});

export function ContextProvider({ children }) {
  const contexto = "testando o contexto";
  const [page, setPage] = useState("");

  return (
    <ContextGlobal.Provider value={{ contexto, page, setPage }}>
      {children}
    </ContextGlobal.Provider>
  );
}

export function useBanana() {
  return useContext(ContextGlobal);
}
