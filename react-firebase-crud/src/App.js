import { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { firestore } from "./firebase-config";
import Router from "./Router";
import { GlobalStyle } from "./theme/GlobalStyle";

function App() {
  useEffect(() => {
    console.log(firestore);
  });

  return (
    <BrowserRouter>
      <GlobalStyle />
        <Router />
    </BrowserRouter>
  );
}

export default App;
