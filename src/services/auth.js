import { appState } from "../app";
import { User } from "../models/User";
import { getFromStorage } from "../utils";

export const authUser = function (login, password) {
  const user = new User(login, password);
  const users = getFromStorage("users");
  const foundUser = users.find((el) => el.login === login);
  
  if (!user.hasAccess){
    return false
  } else {
    localStorage.setItem('user', JSON.stringify(foundUser))
    appState.currentUser = user;

    return true;
  }
};
