import { Injectable } from "@nestjs/common";
import { AddressDetail } from "src/model/AddressDetail";
import { GeographicCoordinates } from "src/model/GeographicCoordinates";



@Injectable()
export class AddressFactory {

    getAddressDetail(raw:any): AddressDetail{
        const details = new AddressDetail();
        details.address = raw.address;
        details.address_name = raw.address_name;
        details.address_type = raw.address_type;
        details.cep = raw.cep;
        details.city = raw.city;
        details.city_ibge = raw.city_ibge;
        details.ddd = raw.ddd;
        details.district = raw.district;
        details.state = raw.state;
        return details;
    }

    getGeographicCoordinates(raw:any): GeographicCoordinates{
        const geoCord = new GeographicCoordinates();
        geoCord.cep = raw.cep;
        geoCord.lat = raw.lat;
        geoCord.lng = raw.lng;
        return geoCord;
    }
}