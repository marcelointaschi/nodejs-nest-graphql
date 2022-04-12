import { Field, ObjectType } from '@nestjs/graphql';
import { AddressDetail } from './AddressDetail';
import { GeographicCoordinates } from './GeographicCoordinates';

@ObjectType()
export class Address {

    @Field(type => String)
    cep: string;

    @Field(type => GeographicCoordinates)
    geoCoordinates: GeographicCoordinates;

    @Field(type => AddressDetail)
    addressDetails: AddressDetail;
}