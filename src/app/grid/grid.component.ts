import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { GridQuery, GridService, Grid } from '@app/state/grid';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { BehaviorSubject, Observable, timer } from 'rxjs';
import { concatMap, distinctUntilChanged, map, mapTo, skip, startWith } from 'rxjs/operators';

@UntilDestroy()
@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GridComponent {
  readonly grid$ = this.gridQuery.grid$;
  readonly buttonDisabled$: Observable<boolean>;
  readonly character$: Observable<string>;
  private grid: Grid['grid'] = [];

  private readonly characterSubject$ = new BehaviorSubject<string>('');

  constructor(private gridQuery: GridQuery, private gridService: GridService) {
    this.character$ = this.characterSubject$.asObservable();
    this.buttonDisabled$ = this.grid$.pipe(map(grid => !!grid.length));
    this.subscribeToGridChange();
  }

  onAddMore(): void {
    this.gridService.addMore(['d', ...this.grid]);
  }

  private subscribeToGridChange(): void {
    this.grid$
      .pipe(
        untilDestroyed(this)
      )
      .subscribe((grid) => {
        this.grid = grid;
      });
  }
}
