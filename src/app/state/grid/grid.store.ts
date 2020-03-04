import { Injectable } from '@angular/core';
import { EntityState, EntityStore, Store, StoreConfig } from '@datorama/akita';
import { createGrid, Grid } from './grid.model';

// export interface GridState extends Grid {}

@Injectable({ providedIn: 'root' })
@StoreConfig({
  name: 'grid'
})
export class GridStore extends Store<Grid> {
  constructor() {
    super(createGrid());
  }
}
