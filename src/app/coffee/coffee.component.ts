import { Component, OnInit } from '@angular/core';
import { Coffee } from './coffee.model';
import { CoffeeService } from '../coffee.service';

@Component({
  selector: 'app-coffee',
  templateUrl: './coffee.component.html',
  styleUrls: ['./coffee.component.css']
})
export class CoffeeComponent implements OnInit {

  coffees: Coffee[];

  constructor(private CoffeeService: CoffeeService) { }

  ngOnInit() {
    this.coffees = this.CoffeeService.getCoffees();
  }

}
