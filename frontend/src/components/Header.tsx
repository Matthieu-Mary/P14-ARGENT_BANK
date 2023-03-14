import Logo from "../assets/img/argentBankLogo.png";
import { Link } from "react-router-dom";
type Props = {};

function Header({}: Props) {
  return (
    <header>
      <nav className="main-nav">
        <Link className="main-nav-logo" to="/">
          <img
            src={Logo}
            alt="Argent Bank Logo"
          />
        </Link>
        <div>
          <Link className="main-nav-item" to="/login">
            <i className="fa fa-user-circle"></i>
            Sign In
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
