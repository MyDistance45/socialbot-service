import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateUserRequestDto {

  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    example: 'john',
  })
  username: string;
  
  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    example: 'password',
  })
  password: string;

}
