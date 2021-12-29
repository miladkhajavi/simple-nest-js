import { TaskStatus } from '../tasks.model';
import { IsEnum, IsOptional } from 'class-validator';
export class GetTasksFilterDto {
  @IsOptional()
  @IsEnum(TaskStatus)
  status?: TaskStatus;

  @IsOptional()
  search?: string;
}
