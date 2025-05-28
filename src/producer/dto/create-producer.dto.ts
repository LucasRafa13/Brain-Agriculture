import { IsNotEmpty, IsString, Matches } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateProducerDto {
  @ApiProperty({ example: 'João da Silva' })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({
    example: '12345678901',
    description: 'CPF (11 dígitos) ou CNPJ (14 dígitos)',
  })
  @IsNotEmpty()
  @Matches(/^\d{11}$|^\d{14}$/, {
    message: 'CPF ou CNPJ inválido. Deve conter 11 ou 14 dígitos numéricos.',
  })
  cpfCnpj: string;
}
