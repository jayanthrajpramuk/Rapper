import {State} from "@ngrx/store";
import { BillActionTypes } from './bill-actions'
import { BillUnionActions } from './bill-actions'

export interface BillState {
  Language : string
  Country : string
  Membership: string
  User : { username: string; age: Number; gender: string }
  Bill: {billNo:Number,paientName:String}
}

export const initialState: BillState = {
  Language: null,
  Country : null,
  Membership: null,
  User : null,
  Bill : null
};

export function billreducer(state = initialState, action: BillUnionActions): BillState {
  console.log("inside Bill reducer", action);

  switch (action.type) {
    case BillActionTypes.Language: {
      return {
        ...state,
        Language: action.payload
      }
    }
    case BillActionTypes.Country: {
      return {
        ...state,
        Country:'India'
      }
    }
    case BillActionTypes.Membership: {
      return {
        ...state,
        Membership: 'Gold'
      }
    }
    case BillActionTypes.User: {
      return {
        ...state,
        User:{
          username: 'Jayanth',
          age: 31,
          gender: 'Male'
        }
      }
    }
    case BillActionTypes.LoadBillsSuccess: {
      return {
        ...state,
        Bill: action.payload
      }
    }

    default: {
      return state;
    }
  }
}
