const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';



export type UsersType = {
    id:number
    photoUrl:string
    followed:boolean
    name:string
    status: string
    photos:{
        small: string
        large:string
    }
    location: {
        city: string
        country: string
    }
}


export type DispatchType = FollowActionType | UnFollowActionType | SetUsersActionType
type FollowActionType = ReturnType<typeof followAC>
type UnFollowActionType = ReturnType<typeof unfollowAC>
type SetUsersActionType = ReturnType<typeof setUsersAC>


let initialState: InitialStateType = {
    users: []
}

export type InitialStateType = {
    users:UsersType[]
}

export const usersReducer = (state: InitialStateType = initialState, action: DispatchType):InitialStateType => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users:state.users.map( u => {
                    if(u.id === action.userID){
                        return {...u, followed: true}
                    }
                        return u
                    })}

        case UNFOLLOW:
            return {
                ...state,
                users:state.users.map( u => {
                    if(u.id === action.userID){
                        return {...u, followed: false}
                    }
                    return u
                })}
        case SET_USERS:{
            return {...state, users: [...state.users, ...action.users] }
        }

        default:
            return state
    }
}


export const followAC = (id:number) => {
   return {
        type: FOLLOW, userID: id
    } as const
}

export const unfollowAC = (id:number) => {
    return {
        type: UNFOLLOW, userID: id
    }as const
}
export const setUsersAC = (users:UsersType[]) => {
    return {
        type: SET_USERS, users: users
    }as const
}