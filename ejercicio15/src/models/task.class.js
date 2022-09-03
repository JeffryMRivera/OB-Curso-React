import { LEVELS } from "./levels.enum";

export class Task {
  name = "";
  description = "";
  completed = false;
  level = LEVELS.NORMAL; //URGENTE, NORMAL, BLOQUEADO

  constructor(
    name,
    description = "",
    completed = false,
    level = LEVELS.NORMAL
  ) {
    this.name = name;
    this.description = description;
    this.completed = completed;
    this.level = level;
  }
}
