import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { AppDispatch, RootState } from "../../app/store";
import login from "../../app/services/loginService";


export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const navigate = useNavigate();
  const dispatch: AppDispatch = useDispatch();
  const data = useSelector((state: RootState) => state.auth)
  const { authSuccess, token, error } = data


  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(login(email, password, remember))
  };


  // Redirige l'utilisateur vers la page de profile
  useEffect(() => {
    if (authSuccess) {
      navigate("/profile");
      setErrorMsg("")
    } else {
      setErrorMsg(error);
    }
  }, [authSuccess, navigate, error])


  return (
    <main className="login">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="input-wrapper">
            <label>Username</label>
            <input
              type="text"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-wrapper">
            <label>Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="input-remember">
            <input
              type="checkbox"
              id="remember-me"
              onClick={() => setRemember(!remember)}
            />
            <label>Remember me</label>
          </div>

          <input type="submit" className="sign-in-button" value="Sign In" />
          {errorMsg !== "" ? (
            <span className="login-error">{errorMsg}</span>
          ) : (
            ""
          )}
        </form>
      </section>
    </main>
  );
}
