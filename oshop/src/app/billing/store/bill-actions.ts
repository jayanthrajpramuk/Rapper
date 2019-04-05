// points to rember when creating the action file.
// #1 an enum, which will have list of all action
// #2 action class for each enum.(payload is optional. If payLoad is needed then payload type needs to be defined. (inline ir separate interface
//  #3 an union of all action classes ))

import {Action} from "@ngrx/store";

export enum BillActionTypes {
  Language = '[Bill Language] Language',
  Country = '[Bill Country] Country',
  Membership = '[Bill Membership] Membership',
  User = '[Bill User] User',
}

export class BillLanguage implements Action {
  readonly type = BillActionTypes.Language;

  constructor(public payload: { language: string }) {
  }
}

export class BillCountry implements Action {
  readonly type = BillActionTypes.Country;

  constructor(public payload: { country: string }) {
  }
}

export class BillMembership implements Action {
  readonly type = BillActionTypes.Membership;

  constructor(public payload: { membership: string }) {
  }
}

export class BillUser implements Action {
  readonly type = BillActionTypes.User;

  constructor(public payload: { username: string; age: Number; gender: string }) {
  }
}

export type BillUnionActions = BillLanguage | BillCountry | BillMembership | BillUser;
