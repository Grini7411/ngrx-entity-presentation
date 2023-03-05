import {createReducer, on} from '@ngrx/store';
import {User} from "../../models/user.model";
import {usersActions} from "./user.actions";


export const userFeatureKey = 'user';

export interface UserState {
  users: User[] | null
}

export const initialState: UserState = {
  users: null
};

export const usersReducer = createReducer(
  initialState,
  on(usersActions.loadAllUsersSuccess, (state, {users}) => ({
      ...state,
      users
  })
  )
)
