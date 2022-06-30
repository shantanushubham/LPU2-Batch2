import { Component } from "react";
import { Link } from "react-router-dom";
import { handleAuthInputChange } from "../Utilities";
import "../css/Auth.css";

class SignUpScreen extends Component {
  state = {
    name: "",
    email: "",
    password: "",
  };

  render = () => (
    <section className={"login"}>
      <h1>Welcome to MyApp</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log(this.state);
        }}
      >
        <div className={"form-div"}>
          <label className={"form-label"}>Name: </label>
          <input
            className={"form-input"}
            type={"text"}
            placeholder={"Name"}
            name={"name"}
            value={this.state.name}
            onChange={handleAuthInputChange(this)}
            required={true}
          />
        </div>
        <div className={"form-div"}>
          <label className={"form-label"}>Email: </label>
          <input
            className={"form-input"}
            type={"email"}
            placeholder={"Email"}
            name={"email"}
            value={this.state.email}
            onChange={handleAuthInputChange(this)}
            required={true}
          />
        </div>
        <div className={"form-div"}>
          <label className={"form-label"}>Password: </label>
          <input
            className={"form-input"}
            type={"password"}
            placeholder={"Password"}
            name={"password"}
            value={this.state.password}
            onChange={handleAuthInputChange(this)}
            required={true}
          />
        </div>
        <button type={"submit"} className={"btn"}>
          SignUp
        </button>
      </form>
      <Link to={"/login"}>
        <button className={"btn"}>Already a user? Login</button>
      </Link>
    </section>
  );
}

export default SignUpScreen;
