
<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://zddesignagency.com/wp-content/uploads/2012/07/places-backend.googleapis.com-e6f04bf6-8f5b-372f-937f-7f5f5a8a96cd-1525433912489.png" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">CEP Info</p>




## Description

API Service to get more information about a CEP.
The original API is [Awesomeapi](https://docs.awesomeapi.com.br/api-cep). Check the documentation for more information.  


Get a cep info e.g:
https://cep.awesomeapi.com.br/json/02436070



## GUI
```
http://localhost:3000/graphql
```

## Playground

### Quey:
```
query{
  getAddress(cep:"02435070"){
    cep,
    geoCoordinates{
      lat,
      lng
    }
  }
}

query{
  getAddress(cep:"02435070"){
    cep,
    geoCoordinates{
      lat,
      lng
    }
  }
}
```
### Mutable:
```
mutation($newAddress:AddressDetailInput!){
  newAddress(newAddress:$newAddress){
    cep,
    address_type,
    address_name,
    address,
    state,
    district,
    city,
    ddd,
    city_ibge
  }
}
{
  "newAddress": {
    "cep" : "02435070",
    "address_type": "Rua",
    "address_name": "Maria Jose Antonio",
    "address": "Rua Maria Jose Antonio",
    "state": "Sao Paulo",
    "district" :"Paulista",
    "city": "Sao Paulo",
    "ddd": "11",
    "city_ibge": "99999999999999"
  }
}
```

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

