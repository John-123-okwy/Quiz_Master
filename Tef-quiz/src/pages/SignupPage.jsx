/*function SignupPage({
  
  password,
  dispatch,
  switchToLogin,
  onSignup,
  loading,
  error,
  email
  
}) {
  return (
    <div className="signup-page-cont">
      <div className="Q--"><h1>Q</h1></div>
      <h3>Create Account</h3>
      <h4>Email Address:</h4>
      <div className="signup-email"><input
        type="email"
        placeholder="Enter email"
        value={email}
        onChange={(e) =>
          dispatch({ type: "SetEmail", payload: e.target.value })
        }
      />
      </div>
      <h4>Your Password:</h4>
      <div className="signup-password">
      <input
        type="password"
        placeholder="Enter password"
        value={password}
        onChange={(e) =>
          dispatch({ type: "SetPassword", payload: e.target.value })
        }
      />
      </div>
<div className="signup-btn"><button onClick={onSignup}>{loading ? "Loading..." : "Sign up"}</button>
</div>
      
      {error && <p style={{ color: "red" }}>{error}</p>}
      <p onClick={switchToLogin} className="dont-have-account">
        Already have an account? <span className="login-up"> Log in</span>
      </p>
    </div>
  );
}

export default SignupPage;
*/

import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, db } from "../firebase/firebase";
import { doc, setDoc } from "firebase/firestore";

function SignupPage() {
  //===========state variable for user name==============//
  const [userName, setUserName] = useState("");

  //================state variabale for email============//

  const [email, setEmail] = useState("");

  //==============state variable for password===========//

  const [password, setPassword] = useState("");

  //=============state variable for error==========//

  const [error, setError] = useState("");

  //============variable for navigate=============//

  const navigate = useNavigate();

  //============handleSignUp==============//

  async function handleSignup(e) {
    e.preventDefault();

    setError("");

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );
      await updateProfile(userCredential.user, { displayName: userName });

      await setDoc(
        doc(db, "users", userCredential.user.uid),
        {
          role: "user",
          createdAt: new Date().toISOString(),
        },
        { merge: true },
      );

      navigate("/dashboard");
    } catch (err) {
      setError(err.message);
    }
  }
  return (
    <div className="signup-container">
      <h1>Create Account</h1>
      <form onSubmit={handleSignup}>
        <input
          type="text"
          placeholder="Enter user name..."
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
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

        <button type="submit">Sign up</button>
      </form>
      {error && <p>{error}</p>}
      <p>
        Already have account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
}

export default SignupPage;
