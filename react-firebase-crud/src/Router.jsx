import React, { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";
import FindPassword from "./pages/FindPassword";
import Home from "./pages/Home";
import Login from "./pages/Login";
import MypageMain from "./pages/MypageMain";
import SignUp from "./pages/SignUp";

function Router() {
  const { currentUser } = useContext(AuthContext);

  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to="/login" />;
  };
  // console.log(currentUser);

  return (
    <>
      <Routes>
        <Route path="/">
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<Login />} />
          <Route path="/mypage" element={<MypageMain />} />
          <Route path="/findpassword" element={<FindPassword />} />
          <Route
            index
            path="/"
            element={
              <RequireAuth>
                <Home />
              </RequireAuth>
            }
          />
        </Route>
      </Routes>
    </>
  );
}

export default Router;
