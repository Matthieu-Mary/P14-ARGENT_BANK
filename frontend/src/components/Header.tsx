import { useSelector, useDispatch } from "react-redux";
import Logo from "../assets/img/argentBankLogo.png";
import { Link } from "react-router-dom";
import { RootState } from "../app/store";
import { useEffect, useState } from "react";
import logout from "../app/services/logoutService";

function Header() {
  const [isAuth, setIsAuth] = useState(false);
  const authSuccess = useSelector((state: RootState) => state.auth.authSuccess);
  const connectedUser = useSelector((state: RootState) => state.user.firstName)

  useEffect(() => {
    setIsAuth(authSuccess);
  }, [authSuccess]);

  const dispatch: any = useDispatch();

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
              <span className="user-name">{connectedUser}</span>
            </div>
            <Link
              className="main-nav-item"
              to="/"
              onClick={ () => dispatch(logout()) } 
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
