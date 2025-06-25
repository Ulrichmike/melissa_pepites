// AuthContext.js
import { createContext, useContext } from "react";
import useAuth from "../Hooks/useAuth";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const auth = useAuth(); // On réutilise le hook personnalisé
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

// Hook pour utiliser le contexte facilement
export function useAuthContext() {
  return useContext(AuthContext);
}
