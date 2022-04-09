import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase";
import React from "react";
import "../styles/login.css";
import { useDispatch } from "react-redux";
import { loginUser } from "../features/user/userSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const googleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        //console.log(user);
        dispatch(loginUser(user));
        navigate("/");
      })
      .catch((error) => {
        const errorMessage = error.message;
        alert(errorMessage);
      });
  };

  return (
    <>
      <section className="register-account">
        <div className="signform">
          <div className="left">
            <a
              href="#"
              style={{ float: "right", marginRight: "35px", fontSize: "0.9em" }}
              className="bts-a"
            >
              Don't have an account? Sign up!
            </a>
            <div className="bts">
              <button href="#" className="fblogin social">
                <i className="fa fa-facebook"></i>
                <span>Sign in with Facebook</span>
              </button>
              <button href="#" className="twlogin social">
                <i className="fa fa-twitter"></i>
                <span>Sign in with Twitter</span>
              </button>
              <button onClick={googleSignIn} className="btn gplogin social">
                <i className="fa fa-google-plus"></i>
                <span>Sign in with Google</span>
              </button>
            </div>
          </div>
          <div className="right">
            <div className="headit">
              <h4>Login To Your Account</h4>
            </div>
            <div className="form">
              <form className="login-form" id="login-form">
                <input type="text" placeholder="User Name" />
                <input type="password" placeholder="Password" />
                <input
                  className="subbt"
                  type="submit"
                  value="Sign In"
                  style={{ border: "none" }}
                />
              </form>
              <input type="checkbox" id="remember" name="remember" />
              <span style={{ color: "#b6b6b6", fontSize: "0.9em" }}>
                Remember Me
              </span>
              <a href="#">Forgot your password?</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
