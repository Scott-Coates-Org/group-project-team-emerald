import { useEffect } from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { auth } from "../../firebase/client";
import { useDispatch } from "react-redux";
import { login } from "../../redux/authSlice";

import styles from "./login.module.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [signInWithGoogle, user] = useSignInWithGoogle(auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    if (user) {
      dispatch(
        login(
          {
            displayName: user.user.displayName,
            email: user.user.email,
            accessToken: user.user.accessToken,
          },
          navigate("/admin")
        )
      );
    }
  }, [user, dispatch, navigate]);

  return (
    <div className={styles.container}>
      <button onClick={() => signInWithGoogle()} className={styles.button}>
        <img src="/images/googlelogo.png" alt="Google Logo" />
        Continue with Google
      </button>
    </div>
  );
};

export default Login;
