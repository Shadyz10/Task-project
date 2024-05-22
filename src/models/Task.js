import { BaseModel } from "./BaseModel";

export class Task extends BaseModel {
  constructor(taskText) {
    super();
    this.text = taskText;
  }
}
