import {
  createActionGroup,
  createFeatureSelector,
  createReducer,
  createSelector,
  emptyProps,
  on,
  props
} from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import {User} from "../../models/user.model";


export const usersActions = createActionGroup({
  source: 'User Effect',
  events: {
    'Load all users': emptyProps(),
    'Load all users success': props<{users: User[]}>(),
    'Add user': props<{user: User}>(),
    'Add user success': props<{user: User}>(),
    'Remove user': props<{id: number}>()
  }
})


export const usersFeatureKey = 'users';

export interface UserEntityState extends EntityState<User> {
  // additional entities state properties
}

export const adapter: EntityAdapter<User> = createEntityAdapter<User>();

export const initialState: UserEntityState = adapter.getInitialState({
  // additional entity state properties
});

export const newUsersReducer = createReducer(
  initialState,
  on(usersActions.addUserSuccess,
    (state, {user}) => adapter.addOne(user, state)
  ),
  on(usersActions.removeUser,
    (state, action) => adapter.removeOne(action.id, state)
  ),
  on(usersActions.loadAllUsersSuccess,
    (state, action) => adapter.addMany(action.users, state)
  )
);

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();


export const usersFeatureSelector = createFeatureSelector<UserEntityState>('users');

export const usersSelector = createSelector(
  usersFeatureSelector,
  selectAll
);


export const userIdsSelector = createSelector(
  usersFeatureSelector,
  selectIds as (state: EntityState<User>) => number[]
);

