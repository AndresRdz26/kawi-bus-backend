import { ApiProperty } from "@nestjs/swagger";

export class CreateBusDto {
    @ApiProperty({
        description: 'Nombre del chofer',
        example: "Fernando AsaltaCunas",
    })
    chofer: string;

    @ApiProperty({
        description: 'Localizacion',
        example: "Tala",
    })
    location: string;

    @ApiProperty({
        description: 'fecha de inicio de horario',
    })
    startTripAt: Date;

    @ApiProperty({
        description: 'fecha de fin de horario',
    })
    endTripAt: Date;
}
