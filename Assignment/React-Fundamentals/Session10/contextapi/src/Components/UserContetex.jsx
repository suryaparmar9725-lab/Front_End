import { createContext } from "react";

const UserContext = createContext({
  username: "FlipkartUser",
  loggedIn: true,
});

export default UserContext;