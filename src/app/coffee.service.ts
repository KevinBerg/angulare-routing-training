import { Injectable } from '@angular/core';
import { Coffee } from './coffee/coffee.model';

@Injectable({
  providedIn: 'root'
})
export class CoffeeService {

  coffees: Coffee[] = [
    { name: 'Espresso' },
    { name: 'Latte macchiato'}
  ];

  constructor() {}

  getCoffees() {
    return this.coffees;
  }

  getCoffeeByName(name: string) {
    for(var i = 0; i < this.coffees.length; i++ ) {
      if( this.coffees[i].name === name ) {
        return this.coffees[i];
      }
    }
  }

}
