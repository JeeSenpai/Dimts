import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsEmpty,} from "class-validator";

export class CreateUserDto {

    @ApiProperty()
    @IsEmpty()
    fname: string;

    @ApiProperty()
    mname: string;

    @ApiProperty()
    @IsEmpty()
    lname: string;

    @ApiProperty()
    @IsEmpty()
    office: string;
    
    @ApiProperty()
    @IsEmpty()
    position: string;

    @ApiProperty()
    @IsEmpty()
    program: string;

    @ApiProperty()
    @IsEmail()
    email: string;

    @ApiProperty()
    @IsEmpty()
    password: string;   
    
    @ApiProperty()
    @IsEmpty()
    isValidated: boolean;
    
}
