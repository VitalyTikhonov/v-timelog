export interface ITask {
  id: string;
  name: string;
  type: TaskType;
  parentId?: string;
  subtaskIds?: string[]; // for STAGED
  subtasks?: ITask[]; // for STAGED

  capacity?: number; // hours
  priority: string;
  scheduledStart?: string; // timestamp; fixedStart: boolean;
  deadline?: string; // timestamp; fixedEnd: boolean;

  status: TaskStatus;
  started?: string; // timestamp
  edited?: string; // timestamp
  closed?: string; // timestamp
  spent: number; // hours
  notes?: string[];
}

export enum TaskType {
  REGULAR = "REGULAR", // Do the cleaning, Take shower, Back up the data. Like the staged but where it is not feasible to single out individual stages
  ONE_OFF = "ONE_OFF", // Study a topic from the list for my professional development
  STAGED = "STAGED", // THE ONLY ONE THAT TAKES SUBTASKS. Study topics per the list for my professional development, Get a visa (multi-step process)
  CONTINUOUS = "CONTINUOUS", // Read Book Grokking Algorhithms, Fulfill Course on Python
}

export enum TaskStatus {
  NEW = "NEW",
  ACTIVE = "ACTIVE",
  SUSPENDED = "SUSPENDED",
  FINISHED = "FINISHED",
  CANCELED = "CANCELED",
}
