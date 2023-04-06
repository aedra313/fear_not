export default function rootReducer (state = {}, action) {
    return {
        modal: usersReducer(state.users, action),
    }
}