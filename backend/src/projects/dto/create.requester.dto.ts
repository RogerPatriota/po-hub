import { IsEmail, IsNotEmpty, IsString } from "class-validator"

export class CreateRequesterDTO {

    @IsString()
    @IsNotEmpty()
    name: string

    @IsEmail()
    @IsNotEmpty()
    email: string
}