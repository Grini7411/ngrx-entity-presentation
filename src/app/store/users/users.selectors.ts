import {createFeatureSelector, createSelector, MemoizedSelector} from '@ngrx/store';
import {userFeatureKey, UserState} from "./users.reducers";
import {User} from "../../models/user.model";

export const usersFeatureSelector = createFeatureSelector<UserState>(userFeatureKey);

export const usersSelector: MemoizedSelector<UserState, User[]> = createSelector(
  usersFeatureSelector,
  (state) => state.users || []
);



