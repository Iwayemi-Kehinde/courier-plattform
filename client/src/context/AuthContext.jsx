import { createContext, useContext, useEffect, useState } from "react";
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // const navigate = useNavigate()

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const res = await fetch("https://courier-plattform-server.pxxl.click/api/user/me", {
                    credentials: "include",
                });

                if (!res.ok) throw new Error();

                const data = await res.json();
                setUser(data);
            } catch {
                setUser(null);
            } finally {
                setLoading(false);
            }
        };

        fetchUser();
    }, []);

    const refreshUser = async () => {
        try {
          const res = await fetch("https://courier-plattform-server.pxxl.click/api/user/me", {
            credentials: "include",
          });
      
          if (!res.ok) throw new Error();
      
          const data = await res.json();
          setUser(data);
        } catch {
          setUser(null);
        } finally {
          setLoading(false);
        }
      };

    return (
        <AuthContext.Provider value={{ user, loading, setUser, refreshUser }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
