import React from "react";
import { useState } from "react";

const loggedStyle = {
  backgroundColor: "green",
  color: "white",
  fontWeight: "bold",
};

const unLoggedStyle = {
  backgroundColor: "tomato",
  color: "white",
  fontWeight: "bold",
};

const LoginButton = ({ loginAction }) => {
  return (
    <button style={loggedStyle} onClick={loginAction}>
      {" "}
      Login{" "}
    </button>
  );
};

const LogoutButton = ({ logoutAction }) => {
  return (
    <button style={unLoggedStyle} onClick={logoutAction}>
      {" "}
      Logout{" "}
    </button>
  );
};

export default function OpcionalRender() {
  const [access, setAccess] = useState(true);
  const [nMessages, setNMessages] = useState(0);

  const logoutAction = () => {
    setAccess(false);
  };

  const loginAction = () => {
    setAccess(true);
  };

  let optionalButton;

  if (access) optionalButton = <LogoutButton logoutAction={logoutAction} />;
  else optionalButton = <LoginButton loginAction={loginAction} />;

  let addMessages = () => {
    setNMessages(nMessages + 1);
  };

  return (
    <div>
      {optionalButton}
      {access && (
        <div>
          {nMessages === 0 && <p>There are no new messages</p>}
          {nMessages > 0 && nMessages === 1 && (
            <p>You have {nMessages} new message</p>
          )}
          {nMessages > 1 && <p>You have {nMessages} new messages</p>}

          {/* {nMessages > 0 ? (
            <p>You have {nMessages} new messages</p>
          ) : (
            <p>There are no new messages</p>
          )} */}

          <button onClick={addMessages}>
            {nMessages === 0 ? "Add Your First Message" : "Add New Message"}
          </button>
        </div>
      )}
    </div>
  );
}
