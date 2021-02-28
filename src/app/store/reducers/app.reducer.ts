import { Action, ActionReducer, createReducer, on } from '@ngrx/store';
import * as Actions from '../actions/app.actions';

export const FEATURE_KEY = '[APP]';


export interface State {
  stock: number;
  totalSold: number;
}

export const initialState: State = {
  stock: 1,
  totalSold: 0
};

const appReducer = createReducer(
  initialState,
  on(Actions.itemSold, (state, { numberSold }) => ({
    ...state,
    stock : state.stock - numberSold,
    totalSold: state.totalSold + numberSold
  })),

  on(Actions.itemResupplied, (state, { numberResupplied }) => ({
    ...state,
    stock : state.stock + numberResupplied
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return appReducer(state, action);
}
