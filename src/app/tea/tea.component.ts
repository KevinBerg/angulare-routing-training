import { Component, OnInit } from '@angular/core';
import { Tea } from './tea.model';

@Component({
  selector: 'app-tea',
  templateUrl: './tea.component.html',
  styleUrls: ['./tea.component.css']
})
export class TeaComponent implements OnInit {

  teas: Tea[] = [
    { name: 'Green Tea' },
    { name: 'Earl Grey' }
  ]

  constructor() { }

  ngOnInit() {
  }

}
