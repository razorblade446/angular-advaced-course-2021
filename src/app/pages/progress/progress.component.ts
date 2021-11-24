import { Component } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css'],
})
export class ProgressComponent {
  progress1: number = 25;
  progress2: number = 35;

  get progressPercent1() {
    return `${this.progress1}%`;
  }

  get progressPercent2() {
    return `${this.progress2}%`;
  }

  progressChanged1(value: number) {
    this.progress1 = value;
  }

  progressChanged2(value: number) {
    this.progress2 = value;
  }
}
