import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule } from 'ng2-charts';

import { IncrementerComponent } from './incrementer/incrementer.component';
import { FormsModule } from '@angular/forms';
import { DonutComponent } from './donut/donut.component';

@NgModule({
  declarations: [IncrementerComponent, DonutComponent],
  imports: [CommonModule, FormsModule, ChartsModule],
  exports: [IncrementerComponent, DonutComponent],
})
export class ComponentsModule {}
