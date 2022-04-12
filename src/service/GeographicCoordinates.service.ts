import { HttpService } from '@nestjs/axios';
import { Injectable, Logger } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';
import { AddressFactory } from 'src/factory/AddressFactory';
import { GeographicCoordinates } from 'src/model/GeographicCoordinates';
import { CepService } from './CepService';

@Injectable()
export class GeographicCoordinatesSerice {    

    constructor(private cepService: CepService, private addressFactory: AddressFactory){}

    private readonly logger = new Logger('GeographicCoordinatesSerice');
    
    async findOneByCep(cep:string): Promise<GeographicCoordinates>{
      const addressResult = await this.cepService.getAddressByCep(cep);
      const address: GeographicCoordinates = this.addressFactory.getGeographicCoordinates(addressResult);
      return address;
    }
}
