import { IsNotEmpty, MinLength,  } from "class-validator";
export class CreateTaskDto {
  @IsNotEmpty()
  @MinLength(2)
  title: string;
  @IsNotEmpty()
  description: string;
}