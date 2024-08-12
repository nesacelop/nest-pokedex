import { IsInt, IsPositive, IsString, Min, MinLength } from "class-validator";
import { isNumberObject } from "util/types";

export class CreatePokemonDto {
    // Isnumber, IsPositive, Min 1
    @IsInt()
    @IsPositive()
    @Min(1)
    no: number;
    //IsString, min 1,
    @IsString()
    @MinLength(1)
    name: string;
}
