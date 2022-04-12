import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class GeographicCoordinates {

    @Field(type => String)
    cep: string;

    @Field({ nullable: true })
    lng?: string;

    @Field({ nullable: true })
    lat?: string;
}











