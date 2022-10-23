import { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { AuthContextProvider } from "./context/AuthContext";
import { firestore } from "./firebase-config";
import Router from "./Router";
import { GlobalStyle } from "./theme/GlobalStyle";

function App() {
  useEffect(() => {
    console.log(firestore);
  });

  return (
    <BrowserRouter>
      <AuthContextProvider>
        <GlobalStyle />
        <Router />
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
