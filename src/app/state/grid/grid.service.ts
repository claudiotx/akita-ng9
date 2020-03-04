import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UntilDestroy } from '@ngneat/until-destroy';
import moment from 'moment';
import { interval, Observable, Subscription } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { createGrid, Grid } from './grid.model';
import { GridStore } from './grid.store';

@UntilDestroy({ arrayName: 'subscriptions' })
@Injectable({ providedIn: 'root' })
export class GridService {
  private readonly subscriptions: Subscription[] = [];
  private readonly generateInterval = 2000;
  private readonly gridGenerator$: Observable<Grid['grid']>;
  private readonly elementsGenerator$: Observable<Grid['elements']>;

  constructor(private gridStore: GridStore) {
    // Instantiate the 2 subscriptions
    this.gridGenerator$ = interval(this.generateInterval).pipe(
      map(() => this.activateGrid()),
      startWith(this.activateGrid())
    );
    this.elementsGenerator$ = this.gridGenerator$.pipe(map(grid => this.generateCode(grid)));
    const gridSubscription = this.gridGenerator$.subscribe(grid => {
      this.gridStore.update({ grid });
    });

    const elementsSubscription = this.elementsGenerator$.subscribe(elements => {
      this.gridStore.update({ elements });
    });

    this.subscriptions.push(gridSubscription);
    this.subscriptions.push(elementsSubscription);
  }
  addMore(grid: string[]): void {
    this.gridStore.update({ grid });
  }

  activateGrid(): Grid['grid'] {
    return ['a', 'b', 'c'];

  }

  private generateCode(grid: Grid['grid']): Grid['elements'] {
    const value1 = this.getGridValue(grid, 1);
    const value2 = this.getGridValue(grid, 2);

    return [value1, value2];
  }

  private getGridValue(grid: Grid['grid'], index: number): number {
    return 1;
  }


  // get() {
  //   return this.http.get('').pipe(tap(entities => this.gridStore.set(entities)));
  // }
}
