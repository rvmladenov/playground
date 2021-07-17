import { CreateTaskDto } from './dto/create-task.dto';
import { Task, TaskStatus } from './task.model';
export declare class TasksService {
    private tasks;
    getAllTasks(): Task[];
    getTaskById(id: string): Task;
    createTask(createTskDto: CreateTaskDto): Task;
    deleteTask(id: string): void;
    updateTaskStatus(id: string, status: TaskStatus): Task;
}
