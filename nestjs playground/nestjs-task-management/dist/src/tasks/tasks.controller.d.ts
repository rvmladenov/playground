import { Task } from "./task.entity";
import { TasksService } from "./tasks.service";
export declare class TasksController {
    private tasksService;
    constructor(tasksService: TasksService);
    getTaskById(id: string): Promise<Task>;
}
