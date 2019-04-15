export const RECEIVE_USERS = "RECEIVE_USERS";

export function receiveUSEERS(users){
    return {
        type: RECEIVE_USERS,
        users  
    }
}