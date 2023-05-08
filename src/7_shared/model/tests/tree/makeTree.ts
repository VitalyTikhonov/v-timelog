import { ITask } from "../../../../6_entities/task";
import * as flatTasks from "../flatFromStrings/_output.json";
import { join } from "path";
import { writeFileSync } from "fs";

const data = flatTasks as ITask[];

const newData = data.map((i) => JSON.parse(JSON.stringify(i)));

const nestedData: ITask[] = newData.filter((i) => !i.parentId);

function pickKids(nestedTasks: ITask[], allTasks: ITask[]): void {
  nestedTasks.forEach((t) => {
    const { subtaskIds } = t;
    if (subtaskIds?.length) {
      t.subtasks = allTasks.filter((i) => subtaskIds.includes(i.id));
      pickKids(t.subtasks, allTasks);
    }
  });
}

pickKids(nestedData, newData);

writeFileSync(join(__dirname, "_output.json"), JSON.stringify(nestedData));

/* To get a nested task list from a flat one, make sure
you have created the flat one in ../flatFromStrings/_output.json
as an array of ITask with some parentIds and subtaskIds specified, also some other fields edited as desired,
you have TypeScript installed on your computer globally,
open the project directory in a terminal and run
clear & tsc src\7_shared\model\tests\tree\makeTree.ts --resolveJsonModule & node src\7_shared\model\tests\tree\makeTree.js
*/
