export const SET_JWT_TOKEN = 'SET_JWT_TOKEN' as const;

export const setJwtToken = (jwtToken:string) => ({
  type: SET_JWT_TOKEN,
  payload: jwtToken,
});

type UserInitialType = {
  jwtToken: string | null,
}

const initialState = {
  jwtToken: 'initiallyNothing',
}

type UserActionType =
  | ReturnType<typeof setJwtToken>

const user = (state:UserInitialType = initialState, action:UserActionType) => {
  switch (action.type) {
    case SET_JWT_TOKEN:{
      return {
        ...state,
        jwtToken: action.payload,
      }
    }
    default:
      return state;
  }
};

export default user;