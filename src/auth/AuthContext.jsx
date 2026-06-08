import React, { createContext, useContext, useState, useEffect } from 'react';

// ─────────────────────────────────────────────
// 데모 계정 목록 (하드코딩)
// ─────────────────────────────────────────────
const DEMO_ACCOUNTS = [
  {
    id: 'batech1234',
    password: 'batech1234@',
    name: '관리자',
    role: '시스템 관리자',
    department: '경영지원팀',
    avatar: 'BA',
  },
];

const SESSION_KEY = 'emp_portal_session';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // 세션 복원 (새로고침 시 로그인 유지)
  useEffect(() => {
    try {
      const saved = sessionStorage.getItem(SESSION_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        setUser(parsed);
        setIsAuthenticated(true);
      }
    } catch {
      sessionStorage.removeItem(SESSION_KEY);
    }
  }, []);

  const login = (inputId, inputPassword) => {
    const found = DEMO_ACCOUNTS.find(
      (acc) => acc.id === inputId && acc.password === inputPassword
    );
    if (found) {
      const { password: _, ...safeUser } = found; // 비밀번호 제외
      setUser(safeUser);
      setIsAuthenticated(true);
      sessionStorage.setItem(SESSION_KEY, JSON.stringify(safeUser));
      return { success: true };
    }
    return { success: false, message: '아이디 또는 비밀번호가 올바르지 않습니다.' };
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    sessionStorage.removeItem(SESSION_KEY);
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
};
