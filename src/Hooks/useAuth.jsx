import { useState, useEffect } from "react";

export function useAuth() {
  const [authState, setAuthState] = useState({
    isAuthenticated: false,
    hasAccount: false,
    isGuest: true,
    user: null, // Intégré directement dans `authState` pour une cohérence
  });

  // Vérifie l'état au chargement
  useEffect(() => {
    const token = localStorage.getItem("token");
    const savedEmail = localStorage.getItem("email");

    if (token && savedEmail) {
      // ✅ Utilisateur connecté
      setAuthState({
        isAuthenticated: true,
        hasAccount: true,
        isGuest: false,
        user: { email: savedEmail },
      });
    } else if (savedEmail) {
      // 🔒 A un compte mais déconnecté
      setAuthState({
        isAuthenticated: false,
        hasAccount: true,
        isGuest: false,
        user: null,
      });
    } else {
      // 👤 Invité (pas de compte)
      setAuthState({
        isAuthenticated: false,
        hasAccount: false,
        isGuest: true,
        user: null,
      });
    }
  }, []);

  // Fonctions pour gérer les états
  const login = (token, email) => {
    localStorage.setItem("token", token);
    localStorage.setItem("email", email);
    setAuthState({
      isAuthenticated: true,
      hasAccount: true,
      isGuest: false,
      user: { email },
    });
  };

  const logout = () => {
    localStorage.removeItem("token");
    setAuthState((prev) => ({
      ...prev,
      isAuthenticated: false,
      user: null,
    }));
  };

  const register = (email) => {
    localStorage.setItem("email", email);
    setAuthState({
      isAuthenticated: false,
      hasAccount: true,
      isGuest: false,
      user: null,
    });
  };

  const switchToGuest = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    setAuthState({
      isAuthenticated: false,
      hasAccount: false,
      isGuest: true,
      user: null,
    });
  };

  return { ...authState, login, logout, register, switchToGuest };
}
