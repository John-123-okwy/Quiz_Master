//=========== variable for AuthContext=============//

import { onAuthStateChanged } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  //============state variable for user=====================//
  const [user, setUser] = useState(null);

  //================state variable for loading=================//
  const [loading, setLoading] = useState(true);

  //============useEffect for user context--this tracks current logged-in user===//

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  return(<AuthContext.Provider value={{user}}>
    {!loading && children}
  </AuthContext.Provider>)

}

export function useAuth(){
    return useContext(AuthContext)
}

