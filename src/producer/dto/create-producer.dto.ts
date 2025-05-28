import { IsNotEmpty, IsString, Length, Matches } from 'class-validator';

export class CreateProducerDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @Matches(/^\d{11}$|^\d{14}$/, {
    message: 'CPF ou CNPJ inválido. Deve conter 11 ou 14 dígitos numéricos.',
  })
  cpfCnpj: string;
}
