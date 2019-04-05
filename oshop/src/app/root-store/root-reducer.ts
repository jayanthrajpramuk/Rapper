import {RootAccessedApplicationActionsUnion, RootActions} from "./root-actions";

export interface RootState {
  LoggedIn : string
}

export const initialState: RootState = {
  LoggedIn: null,
};

export function rootreducer(state = initialState, action: RootAccessedApplicationActionsUnion): RootState {
  console.log("inside Root reducer", action);

  switch (action.type) {
    case RootActions.AccessedApplication: {
      return {
        ...state,
        LoggedIn: 'true'
      }
    }

    default: {
      return state;
    }
  }
}
