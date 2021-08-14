import { IsNotEmpty, IsOptional, IsString,  } from "class-validator";
import { TaskStatus } from "../task-status.enum";

export class FilterTasksDto {
    @IsOptional()
    @IsString()
    title: string;

    @IsOptional()
    @IsString()
    status: TaskStatus
}
