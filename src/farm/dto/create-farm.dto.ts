import { IsUUID, IsString, IsNumber, Min } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateFarmDto {
  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsString()
  city: string;

  @ApiProperty()
  @IsString()
  state: string;

  @ApiProperty()
  @IsNumber()
  @Min(0)
  totalArea: number;

  @ApiProperty()
  @IsNumber()
  @Min(0)
  arableArea: number;

  @ApiProperty()
  @IsNumber()
  @Min(0)
  vegetationArea: number;

  @ApiProperty()
  @IsUUID()
  producerId: string;
}
