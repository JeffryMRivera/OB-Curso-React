import { ROLES } from "./roles.enum";

export class User {
  username = "";
  email = "";
  password = "";
  role = ROLES.USER; //URGENTE, NORMAL, BLOQUEADO

  constructor(username, email, password, role = ROLES.USER) {
    this.username = username;
    this.email = email;
    this.password = password;
    this.role = role;
  }
}
