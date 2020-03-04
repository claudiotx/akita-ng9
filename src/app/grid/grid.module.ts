import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GridComponent } from '@app/grid/grid.component';
import { GridRoutingModule } from './grid-routing.module';

import { PlaygroundComponent } from './playground/playground.component';

@NgModule({
  declarations: [GridComponent, PlaygroundComponent],
  imports: [CommonModule, GridRoutingModule]
})
export class GridModule {}
