
import { Resolver, Args, ResolveField, Parent, Query, Mutation } from "@nestjs/graphql";
import { Address } from "src/model/Address";
import { AddressDetail } from "src/model/AddressDetail";
import { AddressService } from "src/service/Address.service";
import { AddressDetailService } from "src/service/AddressDetail.service";
import { GeographicCoordinates} from "src/model/GeographicCoordinates";
import { GeographicCoordinatesSerice } from "src/service/GeographicCoordinates.service";
import { AddressDetailInput } from "src/model/AddressDetailInput";




@Resolver(of => Address)
export class AddressResolver {

  constructor(
    private addressService: AddressService,
    private detailService: AddressDetailService,
    private geoService: GeographicCoordinatesSerice,
  ) {}

  @Query(returns => Address)
  async getAddress(@Args('cep', { type: () => String }) cep: string) {
    return this.addressService.findOneByCep(cep);
  }

  @ResolveField('addressDetails', returns => AddressDetail)
  async getAddressDetails(@Parent() address: Address) {
    const { cep } = address;
    return this.detailService.findOneByCep(cep);
  }

  @ResolveField('geoCoordinates', returns => GeographicCoordinates)
  async getGeoCoordinates(@Parent() address: Address) {
    const { cep } = address;
    return this.geoService.findOneByCep(cep);
  }

  @Mutation(returns => AddressDetail)
  async newAddress(@Args('newAddress') newAddressDetail:AddressDetailInput){
    const add = this.detailService.addNewAddress(newAddressDetail);
    return add;
  }

}