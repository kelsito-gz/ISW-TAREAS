import { City } from "./city.model";

export class CustomerAdress {
  street: string;
  number: number;
  city: City;
  receiveItSoon: boolean;
  deadline: Date;
}