import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { createGrid, Grid } from './grid.model';
import { GridStore } from './grid.store';

@Injectable({ providedIn: 'root' })
export class GridQuery extends Query<Grid> {

  readonly grid$ = this.select((state) => state.grid);
  readonly elements$ = this.select((state) => state.elements);

  constructor(protected store: GridStore) {
    super(store);
  }

}
