import { createContext, useContext, useState, useEffect } from 'react';
import { base44 } from '@/api/base44Client';
import { appParams } from './app-params';
import axios from 'axios';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoadingAuth, setIsLoadingAuth] = useState(true);
  const [isLoadingPublicSettings, setIsLoadingPublicSettings] = useState(true);
  const [authError, setAuthError] = useState(null);
  const [authChecked, setAuthChecked] = useState(false);
  const [appPublicSettings, setAppPublicSettings] = useState(null);

  useEffect(() => {
    checkAppState();
  }, []);

  const checkAppState = async () => {
    try {
      setIsLoadingPublicSettings(true);
      setAuthError(null);

      const publicAxios = axios.create({
        baseURL: "/api/apps/public",
        headers: { "X-App-Id": appParams.appId }
      });

      try {
        const response = await publicAxios.get(`/prod/public-settings/by-id/${appParams.appId}`);
        setAppPublicSettings(response.data);

        if (appParams.token) {
          await checkUserAuth();
        } else {
          setIsLoadingAuth(false);
          setIsAuthenticated(false);
          setAuthChecked(true);
        }
        setIsLoadingPublicSettings(false);
      } catch (err) {
        console.error("App state check failed:", err);
        const resData = err.response && err.response.data;
        if (err.response && err.response.status === 403 && resData && resData.extra_data) {
          const reason = resData.extra_data.reason;
          setAuthError({
            type: reason === "auth_required" ? "auth_required" : reason === "user_not_registered" ? "user_not_registered" : reason,
            message: resData.message || "Access Restricted"
          });
        } else {
          setAuthError({
            type: "unknown",
            message: err.message || "Failed to load app settings"
          });
        }
        setIsLoadingPublicSettings(false);
        setIsLoadingAuth(false);
      }
    } catch (err) {
      console.error("Unexpected error:", err);
      setAuthError({
        type: "unknown",
        message: err.message || "An unexpected error occurred"
      });
      setIsLoadingPublicSettings(false);
      setIsLoadingAuth(false);
    }
  };

  const checkUserAuth = async () => {
    try {
      setIsLoadingAuth(true);
      const userMe = await base44.auth.me();
      setUser(userMe);
      setIsAuthenticated(true);
      setIsLoadingAuth(false);
      setAuthChecked(true);
    } catch (err) {
      console.error("User auth check failed:", err);
      setIsLoadingAuth(false);
      setIsAuthenticated(false);
      setAuthChecked(true);
      if (err.status === 401 || err.status === 403) {
        setAuthError({
          type: "auth_required",
          message: "Authentication required"
        });
      }
    }
  };

  const logout = (redirect = true) => {
    setUser(null);
    setIsAuthenticated(false);
    if (redirect) {
      base44.auth.logout(window.location.href);
    } else {
      base44.auth.logout();
    }
  };

  const navigateToLogin = () => {
    base44.auth.redirectToLogin(window.location.href);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        isLoadingAuth,
        isLoadingPublicSettings,
        authError,
        appPublicSettings,
        authChecked,
        logout,
        navigateToLogin,
        checkUserAuth,
        checkAppState
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
