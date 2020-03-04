import { ID } from '@datorama/akita';

export interface Grid {
  id: ID;
  elements: number[];
  grid: string[];
}

export function createGrid(params?: Partial<Grid>): Grid {
  return {
    id: 1,
    elements: [],
    grid: []
  };
}
