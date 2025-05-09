import { ApiProperty } from "@nestjs/swagger";

export class CreateTripDto {

    @ApiProperty({
    description: 'llave foranea de userId',
    example: 1,
    })
    userId: number;

    @ApiProperty({
        description: 'llave foranea de busId',
        example: 1,
    })
    busId: number;
}
