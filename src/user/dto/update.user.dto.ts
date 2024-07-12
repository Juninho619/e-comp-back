import { IsEmail, IsNotEmpty, IsString, IsStrongPassword } from "class-validator";


export class UpdateUserDto{

  @IsString()
  @IsNotEmpty()
  username: string;

  @IsString()
  @IsNotEmpty()
  @IsStrongPassword()
  password: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;
}