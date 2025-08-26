import { Type } from "class-transformer";
import { IsDateString, IsNotEmpty, IsOptional, IsString, ValidateNested } from "class-validator";
import { CreateFormDataDTO } from "./create.form.dto";

export class CreateProjectDTO {

    @IsString()
    title: string

    @IsString()
    @IsOptional()
    team: string

    @IsString()
    @IsOptional()
    status: string

    @IsString()
    @IsOptional()
    source: string

    @IsDateString()
    @IsOptional()
    analysisStartDate: Date

    @IsDateString()
    @IsOptional()
    analysisEndDate: Date;
  
    @IsDateString()
    @IsOptional()
    developmentStartDate: Date;

    @IsDateString()
    @IsOptional()
    developmentEndDate: Date;

    @ValidateNested()
    @Type(() => CreateFormDataDTO)
    @IsNotEmpty()
    formData: CreateFormDataDTO
    
}