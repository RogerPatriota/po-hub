import { Type } from "class-transformer"
import { IsDateString, IsNotEmpty, IsOptional, IsString, ValidateNested } from "class-validator"
import { CreateRequesterDTO } from "./create.requester.dto"


export class CreateFormDataDTO {
    @ValidateNested()
    @Type(() => CreateRequesterDTO)
    @IsNotEmpty()
    requester: CreateFormDataDTO
    
    @IsString()
    @IsOptional()
    stakeholders?: string
    
    @IsString()
    @IsOptional()
    description?: string
    
    @IsString()
    @IsOptional()
    problems?: string
    
    @IsString()
    @IsOptional()
    kpis?: string
    
    @IsString()
    @IsOptional()
    vision?: string
    
    @IsDateString()
    @IsOptional()
    dueDate?: Date
    
    @IsString()
    @IsOptional()
    additionalInformations?: string

}