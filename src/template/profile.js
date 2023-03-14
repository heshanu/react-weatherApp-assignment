import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  if (isLoading) {
    console.log("loading");
  } else if (!isAuthenticated) {
    console.log("authenticated: ", isAuthenticated);
  } else if (!isLoading && isAuthenticated) {
    const { name, picture, email } = user;
    var column = {
      float: "left",
      width: "50%",
    };

    var row = {
      content: "",
      display: "table",
      clear: "both",
    };
    return (
      <div className="row" style={row}>
        <div className="column" style={column}>
          <label htmlFor="Name">Name</label>
          <h1>{name}</h1>
          <label htmlFor="Email">Email:</label>
          <p>{email}</p>
        </div>
        <div className="column" style={column}>
          <img src={picture} />
        </div>
      </div>
    );
  }
};

export default Profile;
