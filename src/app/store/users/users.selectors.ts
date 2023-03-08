import { createFeatureSelector, createSelector } from '@ngrx/store';
import {selectAll, UserEntityState} from './users.reducer';

export const usersFeatureSelector = createFeatureSelector<UserEntityState>('users');

export const usersSelector = createSelector(
  usersFeatureSelector,
  selectAll
);
