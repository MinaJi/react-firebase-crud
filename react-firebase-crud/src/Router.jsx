import React, { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";
import Board from "./pages/Board";
import BoardWrite from "./pages/BoardWrite";
import FindPassword from "./pages/FindPassword";
import Home from "./pages/Home";
import Login from "./pages/Login";
import MypageMain from "./pages/MypageMain";
import SignUp from "./pages/SignUp";

function Router() {
  const { currentUser } = useContext(AuthContext);

  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to="/signin" />;
  };
  console.log(currentUser);

  return (
    <>
      <Routes>
        <Route path="/">
          <Route index path="/" element={<Home />} />
          <Route path="/signin" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/mypage" element={<MypageMain />} />
          <Route path="/findpassword" element={<FindPassword />} />
          <Route
            path="/board"
            element={
              <RequireAuth>
                <Board />
              </RequireAuth>
            }
          />
          <Route path="/board/write" element={<BoardWrite />} />
        </Route>
      </Routes>
    </>
  );
}

export default Router;
