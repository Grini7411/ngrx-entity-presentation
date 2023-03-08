import {createActionGroup, emptyProps, props} from "@ngrx/store";
import {User} from "../../models/user.model";

export const usersActions = createActionGroup({
  source: 'User Effect',
  events: {
    'Load all users': emptyProps(),
    'Load all users success': props<{users: User[]}>(),
    'Add user': props<{user: User}>(),
    'Remove user': props<{id: number}>()
  }
})
