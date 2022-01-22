import { React, Fragment } from "react";
import FormLogin from "../componentes/FormLogin/FormLogin";
import "./Login.css";

const Login = () => {
  return (
    <Fragment>
      <div className="title-gradient ">JUEGA YA!</div>

      <div className="styleContainer">
        <FormLogin />
      </div>
    </Fragment>
  );
};

export default Login;
