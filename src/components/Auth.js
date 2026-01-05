import { useContext } from "react";
import { AuthContext } from "./AuthContext";
import React from "react";

const Auth = () => {
  const { isAuthenticated, toggleAuth } = useContext(AuthContext);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Click on the checkbox to get authenticated</h2>

      <p className="authText">
        {isAuthenticated
          ? "You are now authenticated, you can proceed"
          : "you are not authenticated"}
      </p>

      <label>
        <input
          type="checkbox"
          checked={isAuthenticated}
          onChange={toggleAuth}
        />
        I'm not a robot
      </label>

      
    </div>
  );
};

export default Auth;
