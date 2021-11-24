import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-incrementer',
  templateUrl: './incrementer.component.html',
  styles: [],
})
export class IncrementerComponent {
  _progress = 50;

  get progress() {
    return this._progress;
  }

  @Input()
  set progress(value: number) {
    if (value < 0) {
      this._progress = 0;
    } else if (value > 100) {
      this._progress = 100;
    } else {
      this._progress = value;
    }
  }

  @Output() progressChanged: EventEmitter<number> = new EventEmitter();

  changeProgress(progress: number) {
    if (progress > 0 && this._progress >= 100) {
      this._progress = 100;
    } else if (progress < 0 && this._progress <= 0) {
      this._progress = 0;
    } else {
      this._progress += progress;
    }

    this.progressChanged.emit(this._progress);
  }

  onChange(progress: number) {
    this.progress = progress;
  }
}
