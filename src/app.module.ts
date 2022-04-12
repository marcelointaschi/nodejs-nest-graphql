import { ApolloDriverConfig, ApolloDriver } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HttpModule } from '@nestjs/axios';
import { AddressResolver } from './resolvers/address.resolver';
import { AddressService } from './service/Address.service';
import { AddressDetailService } from './service/AddressDetail.service';
import { GeographicCoordinatesSerice } from './service/GeographicCoordinates.service';
import { AddressFactory } from './factory/AddressFactory';
import { CepService } from './service/CepService';


@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),HttpModule],
  controllers: [AppController],
  providers: [
    AppService,
    AddressService,
    AddressDetailService,
    AddressFactory,
    GeographicCoordinatesSerice,
    CepService,
    AddressResolver],
})
export class AppModule {}
