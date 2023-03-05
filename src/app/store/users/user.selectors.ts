import {createFeatureSelector, createSelector} from '@ngrx/store';
import {userFeatureKey, UserState} from "./user.reducer";

export const usersFeatureSelector = createFeatureSelector<UserState>(userFeatureKey);

export const usersSelector = createSelector(
  usersFeatureSelector,
  (state) => state.users
);



