import "./App.css";
import Home from "./components/Home";
import Navigation from "./components/Navigation";
import { Routes, Route, useNavigate } from "react-router-dom";
import SingleMoovie from "./components/SingleMoovie";
import Login from "./components/Login";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import { loginUser } from "./features/user/userSlice";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const user = useSelector((state) => state.user.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        //const uid = user.uid;
        console.log("user", user);
        dispatch(loginUser(user));
        navigate("/");
        // ...
      } else {
        // User is signed out
        // ...
        navigate("/login");
      }
    });
  }, [user]);

  return (
    <Routes>
      <Route
        path="/login"
        element={
          <>
            <Navigation />
            <Login />
          </>
        }
      />
      <Route
        path="/"
        element={
          <>
            <Navigation />
            <Home />
          </>
        }
      />
      <Route
        path="/moovie/detail/:id"
        element={
          <>
            <Navigation />
            <SingleMoovie />
          </>
        }
      />
    </Routes>
  );
}

export default App;
