import { Injectable, Logger } from '@nestjs/common';
import { Address } from 'src/model/Address';
import { AddressFactory } from 'src/factory/AddressFactory';
import { firstValueFrom } from 'rxjs';
import { CepService } from './CepService';

@Injectable()
export class AddressService {

  constructor(private cepService: CepService, private addressFactory: AddressFactory){}

  private readonly logger = new Logger('AddressService');
  
  
    async findOneByCep(cep:string): Promise<Address>{
      const addressResult = await this.cepService.getAddressByCep(cep);
      const address = new Address()
      address.cep = cep;
      address.geoCoordinates = this.addressFactory.getGeographicCoordinates(addressResult);
      address.addressDetails = this.addressFactory.getAddressDetail(addressResult);
        return address;
    }
}
