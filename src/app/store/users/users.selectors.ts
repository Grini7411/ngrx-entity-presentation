import { createFeatureSelector, createSelector } from '@ngrx/store';
import {selectAll, selectIds, UserEntityState} from './users.reducer';
import {EntityState} from "@ngrx/entity";
import {User} from "../../models/user.model";

export const usersFeatureSelector = createFeatureSelector<UserEntityState>('users');

export const usersSelector = createSelector(
  usersFeatureSelector,
  selectAll
);


export const userIdsSelector = createSelector(
  usersFeatureSelector,
  selectIds as (state: EntityState<User>) => number[]
);

