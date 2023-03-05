export interface ITask {
  id: string;
  type: TaskType;
  parentId?: string;
  subtasks?: string[];

  capacity: number; // hours
  priority: string;
  scheduledStart: string; // timestamp; fixedStart: boolean;
  deadline: string; // timestamp; fixedEnd: boolean;

  status: TaskStatus;
  notes: string[];
  started: string; // timestamp
  edited: string; // timestamp
  closed: string; // timestamp
  spent: number; // hours
}

enum TaskType {
  REGULAR = "REGULAR",
  ONE_OFF = "ONE_OFF",
  STAGED = "STAGED",
  CONTINUOUS = "CONTINUOUS",
}

enum TaskStatus {
  NEW = "NEW",
  ACTIVE = "ACTIVE",
  SUSPENDED = "SUSPENDED",
  FINISHED = "FINISHED",
  CANCELED = "CANCELED",
}
