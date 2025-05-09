import { ApiProperty } from '@nestjs/swagger';
import {
  IsInt,
  IsEmail,
  IsString,
  Length,
} from 'class-validator';

export class CreateUserDto {
  @ApiProperty({
    description: 'Código único del usuario',
    example: 1001,
  })
  @IsInt({ message: 'El código debe ser un número entero.' })
  code: number;

  @ApiProperty({
    description: 'Correo electrónico único del usuario',
    example: 'usuario@ejemplo.com',
    maxLength: 255,
  })
  @IsEmail({}, { message: 'Debe ser un correo electrónico válido.' })
  @Length(1, 255, {
    message: 'El email debe tener entre $constraint1 y $constraint2 caracteres.',
  })
  email: string;

  @ApiProperty({
    description: 'NIP secreto del usuario',
    example: 'mi-secreto-123',
    maxLength: 255,
    writeOnly: true,
  })
  @IsString({ message: 'El NIP debe ser una cadena de texto.' })
  @Length(1, 255, {
    message: 'El NIP debe tener entre $constraint1 y $constraint2 caracteres.',
  })
  nip: string;
}
