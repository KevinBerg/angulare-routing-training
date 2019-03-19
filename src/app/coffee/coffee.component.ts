import { Component, OnInit } from '@angular/core';
import { Coffee } from './coffee.model';

@Component({
  selector: 'app-coffee',
  templateUrl: './coffee.component.html',
  styleUrls: ['./coffee.component.css']
})
export class CoffeeComponent implements OnInit {

  coffees: Coffee[] = [
    { name: 'Espresso' },
    { name: 'Latte macchiato'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
