import { Component } from "react";
import { Link } from "react-router-dom";
import { handleAuthInputChange } from "../Utilities";
import "../css/Auth.css";

class LoginScreen extends Component {
  state = {
    email: "",
    password: "",
  };

  render = () => (
    <section className={"login"}>
      <h1>Login into MyApp</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log(this.state);
        }}
      >
        <div className={"form-div"}>
          <label className={"form-label"}>Email: </label>
          <input
            className={"form-input"}
            type={"email"}
            name={"email"}
            placeholder={"Email"}
            onChange={handleAuthInputChange(this)}
            value={this.state.email}
          />
        </div>
        <div className={"form-div"}>
          <label className={"form-label"}>Password: </label>
          <input
            className={"form-input"}
            type={"password"}
            name={"password"}
            placeholder={"Password"}
            onChange={handleAuthInputChange(this)}
            value={this.state.password}
          />
        </div>
        <button type={"submit"} className={"btn"}>
          Login
        </button>
      </form>
      <Link to={"/sign-up"}>
        <button className={"btn"}>New here? SignUp</button>
      </Link>
    </section>
  );
}

export default LoginScreen;
