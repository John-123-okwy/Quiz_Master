/*function LoginPage({
  dispatch,
  onLogin,
  switchToSignup,
  email,
  password,
  loading,
  error,
  handleResetPassword,
}) {
  console.log( typeof dispatch)
  return (
    <div className="login-page-cont">
      <div className="Q--">
        <h1>Q</h1>
      </div>
      <h3>Welcome Back!</h3>
      <h4>Email Address:</h4>
      <div className="login-email">
        <input
          type="email"
          placeholder="Enter email..."
          value={email}
          onChange={(e) =>
            dispatch({ type: "SetEmail", payload: e.target.value })
          }
        />
      </div>
      <h4>Your Password:</h4>
      <div className="login-password">
        <input
          type="password"
          placeholder="Enter password..."
          value={password}
          onChange={(e) =>
            dispatch({ type: "SetPassword", payload: e.target.value })
          }
        />
      </div>
      <div className="login-btn">
        <button onClick={onLogin}>{loading ? "Loading..." : "Log in"}</button>
      </div>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <p onClick={switchToSignup} className="dont-have-account">
        Don't have an account? <span className="sign-up">Sign up</span>
      </p>
      <p
        onClick={handleResetPassword}
        className="forgot-password"
      >
        Forgot password?
      </p>
    </div>
  );
}

export default LoginPage;*/

import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase/firebase";

function LoginPage() {
  //==============state variable for email============//

  const [email, setEmail] = useState("");

  //===============state variable for password========//

  const [password, setPassword] = useState("");

  //========state variable for error==================//

  const [error, setError] = useState("");

  //==========variable for navigate===================//

  const navigate = useNavigate();

  //====================handleLogin===================//

  async function handleLogin(e) {
    e.preventDefault();

    setError("");

    try {
      await signInWithEmailAndPassword(auth, email, password);

      navigate("/dashboard");
    } catch (err) {
      setError(err.message);
    }
  }
  return (
    <div className="login-container">
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Enter email..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter password..."
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit"> Login</button>
      </form>
      {error && <p>{error}</p>}
      <p>
        No account ? <Link to="/signup">Sign up</Link>
      </p>
    </div>
  );
}

export default LoginPage;
