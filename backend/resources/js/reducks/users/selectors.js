import {createSelector} from 'reselect';

const usersSelector = (state) => state.users;

export const getUsersId = createSelector(
    [usersSelector],
    state => state.id
)

export const getUsername = createSelector(
    [usersSelector],
    state => state.name
)