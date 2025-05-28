import { IsString, IsUUID } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateCropDto {
  @ApiProperty({ example: 'Soja' })
  @IsString()
  name: string;

  @ApiProperty()
  @IsUUID()
  harvestId: string;
}
