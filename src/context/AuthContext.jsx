import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("careerbridge_current_user"));
    } catch {
      return null;
    }
  });

  function register(userData) {
    const users = JSON.parse(
      localStorage.getItem("careerbridge_users") || "[]",
    );

    const existingUser = users.find((item) => item.email === userData.email);

    if (existingUser) {
      return { success: false, message: "Email already registered." };
    }

    const newUser = {
      id: Date.now(),
      name: userData.name,
      email: userData.email,
      password: userData.password,
      role: userData.role,
    };

    const updatedUsers = [...users, newUser];

    localStorage.setItem("careerbridge_users", JSON.stringify(updatedUsers));

    const currentUser = {
      id: newUser.id,
      name: newUser.name,
      email: newUser.email,
      role: newUser.role,
    };

    localStorage.setItem(
      "careerbridge_current_user",
      JSON.stringify(currentUser),
    );

    setUser(currentUser);

    return { success: true };
  }

  function login(email, password) {
    const users = JSON.parse(
      localStorage.getItem("careerbridge_users") || "[]",
    );

    const foundUser = users.find(
      (item) => item.email === email && item.password === password,
    );

    if (!foundUser) {
      return {
        success: false,
        message: "Invalid email or password.",
      };
    }

    const currentUser = {
      id: foundUser.id,
      name: foundUser.name,
      email: foundUser.email,
      role: foundUser.role,
    };

    localStorage.setItem(
      "careerbridge_current_user",
      JSON.stringify(currentUser),
    );

    setUser(currentUser);

    return { success: true };
  }

  function logout() {
    localStorage.removeItem("careerbridge_current_user");
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ user, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
