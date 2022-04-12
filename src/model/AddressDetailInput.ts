import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class AddressDetailInput {
    
    @Field(type => String)
    cep: string;

    @Field({ nullable: true })
    address_type?: string;

    @Field({ nullable: true })
    address_name?: string;

    @Field({ nullable: true })
    address?: string;

    @Field({ nullable: true })
    state?: string;

    @Field({ nullable: true })
    district?: string;

    @Field({ nullable: true })
    city?: string;

    @Field({ nullable: true })
    ddd?: string;

    @Field({ nullable: true })
    city_ibge?: string;
}