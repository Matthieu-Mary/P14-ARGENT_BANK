import { useSelector, useDispatch } from "react-redux";
import Logo from "../assets/img/argentBankLogo.png";
import { Link } from "react-router-dom";
import { RootState } from "../app/store";
import { useEffect, useState } from "react";
import logout from "../app/services/logoutService";
import { AppDispatch } from "../app/store";

function Header() {
  const [isAuth, setIsAuth] = useState(false);
  const authSuccess = useSelector((state: RootState) => state.auth.authSuccess);
  const connectedUser = useSelector((state: RootState) => state.user.firstName)
  const connectedUserStorage = localStorage.getItem("firstName");
  const formatedConnectedUserStorage = connectedUserStorage?.split("").slice(1, connectedUserStorage.length - 1).join("");
  const token = localStorage.getItem("token") ? localStorage.getItem("token") : sessionStorage.getItem("token") ? sessionStorage.getItem("token") : null;


  useEffect(() => {
    if(token) {
      setIsAuth(true);
    } else {
      setIsAuth(false)
    }
  }, [authSuccess, token]);

  const dispatch: AppDispatch = useDispatch();

  const handleSignout = () => {
    dispatch(logout());
    setIsAuth(false)
  }

  return (
    <header>
      <nav className="main-nav">
        <Link className="main-nav-logo" to="/">
          <img src={Logo} alt="Argent Bank Logo" />
        </Link>
        {isAuth ? (
          <div className="logout-container">
            <div>
              <i className="fa fa-user-circle"></i>
              <Link to="/profile" className="user-name">{formatedConnectedUserStorage ?? connectedUser}</Link>
            </div>
            <Link
              className="main-nav-item"
              to="/"
              onClick={() => handleSignout()} 
            >
              <i className="fa fa-sign-out"></i>
              Sign Out
            </Link>
          </div>
        ) : (
          <div>
            <Link className="main-nav-item" to="/login">
              <i className="fa fa-user-circle"></i>
              Sign In
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Header;
