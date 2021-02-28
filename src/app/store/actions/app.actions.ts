import { createAction, props } from '@ngrx/store';

export const itemSold = createAction(
  '[Purchase] Item Sold',
  props<{
      numberSold: number
  }>());



export const itemResupplied = createAction(
  '[Resupply] Item Resupplied',
  props<{
      numberResupplied: number
  }>());
