import { HttpService } from "@nestjs/axios";
import { Injectable, Logger } from "@nestjs/common";
import { firstValueFrom } from "rxjs";
import { AddressFactory } from "src/factory/AddressFactory";

@Injectable()
export class CepService {

    constructor(private httpService: HttpService, private addressFactory: AddressFactory){}

    private readonly logger = new Logger('cepService');

    async getAddressByCep(cep:string): Promise<any>{
        const url = `https://cep.awesomeapi.com.br/json/${cep}`
  
        this.logger.log('URL',url);
        
        const { data } = await firstValueFrom(this.httpService.get(url));
  
        return data;
      }
}