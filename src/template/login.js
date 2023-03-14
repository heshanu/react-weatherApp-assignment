import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
const style = {
  margin: "10px 10px 10px 10px",
};
const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <button style={style} onClick={() => loginWithRedirect()}>
      Log In
    </button>
  );
};

export default LoginButton;
