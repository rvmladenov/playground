import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateTaskDto } from './dto/create-task.dto';
import { FilterTasksDto } from './dto/filter-tasks.dto';
import { TaskStatus } from './task-status.enum';
import { Task } from './task.entity';
import { TaskRepository } from './task.repository';

@Injectable()
export class TasksService {

    constructor(
        @InjectRepository(TaskRepository)
        private taskRepository: TaskRepository
    ) {}

    async getAllTasks(filterDto: FilterTasksDto): Promise<Task[]> {
        return this.taskRepository.getTasks(filterDto);
    }

    async getTaskById(id: string): Promise<Task> {
        // return this.tasks.find((task) => task.id === id);
        const found = await this.taskRepository.findOne(id);

        if (!found) {
            throw new NotFoundException(`Task with id ${id} was not found`);
        }

        return found;
    }

    async createTask(createTskDto: CreateTaskDto): Promise<Task> {
        return this.taskRepository.createTask(createTskDto);
    }

    async deleteTask(id: string): Promise<void> {
        await this.taskRepository.delete({id: id});
    }
    
    async updateTaskStatus(id: string, status: TaskStatus): Promise<Task> {
        const task = await this.getTaskById(id);
        task.status = status;
        return await this.taskRepository.save(task);
    }

}
