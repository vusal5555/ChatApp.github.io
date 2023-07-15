import { createContext, useContext, useEffect, useState } from "react";
import { auth, db } from "../firestore";
import {
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { onSnapshot, query, collection, orderBy } from "firebase/firestore";

const UserContext = createContext();

const provider = new GoogleAuthProvider();

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [messages, setMessages] = useState([]);

  const signInWithGoogle = () => {
    return signInWithPopup(auth, provider);
  };

  const logOut = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    const q = query(collection(db, "messages"), orderBy("timestamp"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let messages = [];
      querySnapshot.forEach((queryItem) => {
        messages.push({ ...queryItem.data(), id: queryItem.id });
      });
      setMessages(messages);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <UserContext.Provider value={{ signInWithGoogle, user, logOut, messages }}>
      {children}
    </UserContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(UserContext);
};
