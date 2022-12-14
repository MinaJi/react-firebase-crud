import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import AuthReducer from "./AuthReducer";
import { auth } from "../firebase-config";

const INITIAL_STATE = {
  currentUser: JSON.parse(localStorage.getItem("user")) || null,
}; // 현재유저의 정보를 로컬스토리지에 저장함

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);
  const [user, setUser] = useState({});

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const logout = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscriber = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log(currentUser);
    });
    return () => {
      unsubscriber();
    };
  }, []);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.currentUser));
  }, [state.currentUser]); // 새로고침해도 currentUser가 지워지지 않도록 로컬스토리지에 저장

  return (
    <AuthContext.Provider
      value={{ currentUser: state.currentUser, dispatch, createUser, user, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
