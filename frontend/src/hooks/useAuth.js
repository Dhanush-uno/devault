import { useState, useEffect } from "react";

export default function useAuth() {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const savedToken = localStorage.getItem("token");
    if (savedToken) setToken(savedToken);
  }, []);

  return { token, setToken };
}
