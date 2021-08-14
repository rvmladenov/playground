import { EntityRepository, Repository } from "typeorm";
import { CreateTaskDto } from "./dto/create-task.dto";
import { FilterTasksDto } from "./dto/filter-tasks.dto";
import { TaskStatus } from "./task-status.enum";
import { Task } from "./task.entity";

@EntityRepository(Task)
export class TaskRepository extends Repository<Task> {

    async getTasks(filterDto: FilterTasksDto): Promise<Task[]> {
        const { title, status } = filterDto;
        const query = this.createQueryBuilder('task');

        if (status) {
            query.andWhere('task.status = :status', { status })
        }
        
        if (title) {
            query.andWhere('task.title like :title OR task.description like :title',
            { title: `%${title}%` })
        }
        const tasks = await query.getMany();
        return tasks;
    }

    async createTask(taskDto: CreateTaskDto): Promise<Task> {
        const { title, description } = taskDto;

        const task: Task = this.create({
            title: title,
            description: description,
            status: TaskStatus.OPEN
        });

        return await this.save(task);
    }
}