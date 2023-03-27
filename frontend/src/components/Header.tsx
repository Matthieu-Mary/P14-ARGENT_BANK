import { useSelector, useDispatch } from "react-redux";
import Logo from "../assets/img/argentBankLogo.png";
import { Link } from "react-router-dom";
import { RootState } from "../app/store";
import { logoutUser } from "../app/features/authSlice";

function Header() {
  const isAuth = useSelector((state: RootState) => state.auth.authSuccess);
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
              <span className="user-name">Tony</span>
            </div>
            <Link className="main-nav-item" to="/" onClick={dispatch(logoutUser())}>
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
