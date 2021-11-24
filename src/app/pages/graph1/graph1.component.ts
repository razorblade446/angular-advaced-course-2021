import { Component } from '@angular/core';
import { Label, MultiDataSet } from 'ng2-charts';

@Component({
  selector: 'app-graph1',
  templateUrl: './graph1.component.html',
  styles: [],
})
export class Graph1Component {
  public data1: MultiDataSet = [[100, 150, 250, 400]];

  public data2: MultiDataSet = [[50, 100, 150, 250]];

  public labels1: Label[] = ['Onions', 'Garlic', 'Tomatoes', 'Pepper'];
  public labels2: Label[] = ['Water', 'Beer', 'Soda', 'Sake'];
}
