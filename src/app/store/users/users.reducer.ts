import { createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import {usersActions} from "./user.actions";
import {User} from "../../models/user.model";

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
  on(usersActions.addUser,
    (state, {user}) => adapter.addOne(user, state)
  ),
  // on(UsersActions.addUserss,
  //   (state, action) => adapter.addMany(action.userss, state)
  // ),
  // on(UsersActions.upsertUserss,
  //   (state, action) => adapter.upsertMany(action.userss, state)
  // ),
  // on(UsersActions.updateUsers,
  //   (state, action) => adapter.updateOne(action.users, state)
  // ),
  // on(UsersActions.updateUserss,
  //   (state, action) => adapter.updateMany(action.userss, state)
  // ),
  on(usersActions.removeUser,
    (state, action) => adapter.removeOne(action.name, state)
  ),
  // on(UsersActions.deleteUserss,
  //   (state, action) => adapter.removeMany(action.ids, state)
  // ),
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
