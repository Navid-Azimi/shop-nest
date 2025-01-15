import { IsEmail, IsString, IsStrongPassword } from 'class-validator';

export class CreateUserRequest {
  @IsEmail()
  email: string;

  @IsStrongPassword()
  password: string;
}
