import { IsString, IsUUID } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateHarvestDto {
  @ApiProperty({ example: 'Safra 2022' })
  @IsString()
  year: string;

  @ApiProperty()
  @IsUUID()
  farmId: string;
}
