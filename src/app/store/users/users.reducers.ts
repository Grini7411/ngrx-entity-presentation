import {createReducer, on} from '@ngrx/store';
import {User} from "../../models/user.model";
import {usersActions} from "./users.actions";


export const userFeatureKey = 'user';

export interface UserState {
  users: User[] | null
}

export const initialState: UserState = {
  users: null
};

export const usersReducers = createReducer(
  initialState,
  on(usersActions.loadAllUsersSuccess, (state, {users}) => ({
      ...state,
      users
  })),
  on(usersActions.removeUser, (state, {id}) => {
    const newUsers = state?.users?.filter(user => user.id !== id) ?? state.users
    return {
      ...state,
      users: newUsers
    }
  }),
  on(usersActions.addUserSuccess, (state, {user}) => {
    let newUsers: User[] = [];

    if (Array.isArray(state?.users)) {
      newUsers = [...state.users, user];
    }
    return {
      ...state,
      users: newUsers
    }
  })
)
