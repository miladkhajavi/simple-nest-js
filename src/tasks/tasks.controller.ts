import {
  Body,
  Controller,
  Get,
  Post,
  Param,
  Delete,
  Patch,
  Query,
} from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';
import { UpdateStatusDto } from './dto/update-status.dto';
import { TaskStatus } from './tasks-status.enum';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private taskService: TasksService) {
    this.taskService = taskService;
  }
  // @Get()
  // getTasks(@Query() filter: GetTasksFilterDto): Task[] {
  //   if (Object.keys(filter).length) {
  //     //some filters
  //     return this.taskService.getFilteredTasks(filter)
  //   }
  //   return this.taskService.getAllTasks();
  // }
  // @Get('/:id')
  // getTaskById(@Param('id') id: string): Task {
  //   return this.taskService.getTaskById(id);
  // }

  // @Post()
  // createTask(@Body() createTaskDto: CreateTaskDto): Task {
  //   return this.taskService.createTask(createTaskDto);
  // }

  // @Delete('/:id')
  // deleteTask(@Param('id') id: string): void {
  //   return this.taskService.deleteTask(id);
  // }

  // @Patch('/:id/status')
  // updateTask(
  //   @Param('id') id: string,
  //   @Body() updateStatus: UpdateStatusDto,
  // ): Task {
  //   const { status } = updateStatus
  //   return this.taskService.updateTask(id, status);
  // }
}
