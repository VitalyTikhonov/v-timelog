import { ITask, TaskStatus, TaskType } from "../../../../6_entities/task";
import { v4 as uuidv4 } from "uuid";
import { join } from "path";
import { writeFileSync } from "fs";

import * as rawData from "./_input.json";
/* Must be of type string[], e. g.:
[
  "goal1",
  "goal1 / task1",
  "goal1 / task1 / subtask1",
  "goal1 / task1 / subtask1 / subtask1-1", // any depth
  "goal1 / task1 / subtask1 / subtask1-2",
  "goal2", // etc.
]
*/

const dataParsed = rawData.map((rawItem): ITask => {
  const segments = rawItem.split(" / ");
  return {
    id: uuidv4(),
    name: segments[segments.length - 1],
    type: TaskType.REGULAR,
    parentId: segments[segments.length - 2],
    priority: "Z000",
    status: TaskStatus.NEW,
    spent: 0,
  };
});

const nonexistentParents: Set<string> = new Set();

const newData = dataParsed.map((i) => JSON.parse(JSON.stringify(i)));
newData.forEach((i) => {
  if (!i.parentId) return;
  const parent = newData.find((d) => d.name === i.parentId);
  if (parent) {
    i.parentId = parent.id;
    parent.subtaskIds = (parent.subtaskIds ?? []).concat(i.id);
  } else {
    nonexistentParents.add(i.parentId);
  }
});

if (nonexistentParents.size) {
  process.stderr.write(JSON.stringify(Array.from(nonexistentParents)) + "\n");
} else {
  writeFileSync(join(__dirname, "_output.json"), JSON.stringify(newData));
}

/* To get your input file processed, make sure you have TypeScript installed on your computer globally,
open the project directory in a terminal and run
clear & tsc src\7_shared\model\tests\flatFromStrings\makeFromStrings.ts --resolveJsonModule & node src\7_shared\model\tests\flatFromStrings\makeFromStrings.js
Consider manually editing all the fields except name, id, parentId, subtaskIds and subtasks for each task.
*/
