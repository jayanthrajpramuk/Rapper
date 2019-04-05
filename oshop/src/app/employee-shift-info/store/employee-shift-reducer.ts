import {EmployeeShiftActionTypes, EmployeeShiftUnionActions, ESChange, ESUser} from "./employee-shift-actions";

export interface ESState {
  User: ESUser
  Name:string
  Change:ESChange
}

export const initialState: ESState = {
  User: null,
  Name: 'VOLVO',
  Change:null
};

export function employeeShiftReducer(state = initialState, action: EmployeeShiftUnionActions):ESState  {
  console.log("inside Employee reducer", action);

  switch (action.type) {
    case EmployeeShiftActionTypes.User: {
      return {
        ...state,
        User: action.payload
      }
    }

    case EmployeeShiftActionTypes.Change: {
      return {
        ...state,
        User: {
          name: 'Jayanth - A02851599',
          shiftType: 'General',
          location: 'Bangalore',
          age: 31,
          gender: 'Male'
        }
      }
    }

    case EmployeeShiftActionTypes.Name: {
      return {
        ...state,
          Name:'Jayanth - Strongest Avenger'
      }
    }

    default: {
      return state;
    }
  }
}
