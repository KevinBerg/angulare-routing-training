import { Component, OnInit } from '@angular/core';
import { CoffeeService } from 'src/app/coffee.service';
import { Coffee } from '../coffee.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-coffee',
  templateUrl: './edit-coffee.component.html',
  styleUrls: ['./edit-coffee.component.css']
})
export class EditCoffeeComponent implements OnInit {

  coffee: Coffee;

  constructor(private CoffeeService: CoffeeService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.coffee = this.CoffeeService.getCoffeeByName(this.route.snapshot.params['name']);
  }

}
