import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromApp from '../reducers/app.reducer';

const selectAppState = createFeatureSelector<fromApp.State>(fromApp.FEATURE_KEY);

export const selectStock = createSelector(
  selectAppState,
  (state) => state.stock
);


export const selectTotalSold = createSelector(
  selectAppState,
  (state) => state.totalSold
);
