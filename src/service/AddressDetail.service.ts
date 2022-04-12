import { HttpService } from '@nestjs/axios';
import { Injectable, Logger } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';
import { AddressFactory } from 'src/factory/AddressFactory';
import { AddressDetail } from 'src/model/AddressDetail';
import { CepService } from './CepService';

@Injectable()
export class AddressDetailService {

    constructor(private cepService: CepService, private addressFactory: AddressFactory){}

    private readonly logger = new Logger('AddressDetails');
    
    async findOneByCep(cep:string): Promise<AddressDetail>{
      const addressResult = await this.cepService.getAddressByCep(cep);
      const address: AddressDetail = this.addressFactory.getAddressDetail(addressResult);
      return address;
    }

    addNewAddress(newItem:any):AddressDetail{
      const address = this.addressFactory.getAddressDetail(newItem);
      this.logger.log('new address',JSON.stringify(address));
      return address;
    }
}
