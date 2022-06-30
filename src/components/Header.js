import { Component } from "react";
import { Link } from "react-router-dom";
import "../css/Header.css";

class Header extends Component {
  render = () => (
    <div>
      <nav className={"nav-bar"}>
        <Link to={""}>
          <div className={"nav-item"}>Home</div>
        </Link>
        <Link to={"/login"}>
          <div className={"nav-item"}>Login</div>
        </Link>
        <Link to={"/sign-up"}>
          <div className={"nav-item"}>SignUp</div>
        </Link>
      </nav>
    </div>
  );
}

export default Header;
