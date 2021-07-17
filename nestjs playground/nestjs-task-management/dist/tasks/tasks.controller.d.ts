import { CreateTaskDto } from "./dto/create-task.dto";
import { UpdateTaskStatusDto } from "./dto/update-task-status.dto";
import { Task } from "./task.model";
import { TasksService } from "./tasks.service";
export declare class TasksController {
    private tasksService;
    constructor(tasksService: TasksService);
    getAllTasks(): Task[];
    getTaskById(id: string): Task;
    createTask(createTaskDto: CreateTaskDto): Task;
    deleteTask(id: string): void;
    updateTaskStatus(id: string, updateTaskStatusDto: UpdateTaskStatusDto): Task;
}
