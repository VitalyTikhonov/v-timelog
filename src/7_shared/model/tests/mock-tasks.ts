import { ITask, TaskStatus, TaskType } from "6_entities/task";
import { v4 as uuidv4 } from "uuid";

const healthAndSports = { id: uuidv4(), name: "Health and sports", type: TaskType.REGULAR, priority: "Z000", status: TaskStatus.NEW, spent: 0 };

const developmentGeneral = { id: uuidv4(), name: "Development general", type: TaskType.REGULAR, priority: "Z000", status: TaskStatus.NEW, spent: 0 };

const findAJob = { id: uuidv4(), name: "Find a job", type: TaskType.REGULAR, priority: "Z000", status: TaskStatus.NEW, spent: 0 };

const developmentProfessional = { id: uuidv4(), name: "Development professional", type: TaskType.REGULAR, priority: "Z000", status: TaskStatus.NEW, spent: 0 };

export const tasks: ITask[] = [];
