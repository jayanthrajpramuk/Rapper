// points to rember when creating the action file.
// #1 an enum, which will have list of all action
// #2 action class for each enum.(payload is optional. If payLoad is needed then payload type needs to be defined. (inline ir separate interface
//  #3 an union of all action classes ))

import {Action} from "@ngrx/store";

export enum EmployeeShiftActionTypes {
  User = '[EmployeeShift User] User',
  Name = '[EmployeeShift] Name',
  Change = '[EmployeeShift] Change',
  List = '[EmployeeShift] List'
}

export interface ESUser {
  name:string;
  shiftType:string;
  location:string;
  age:number;
  gender:string;
}

export interface ESChange {
  name:string;
  shiftTypeOld:string;
  shiftTypeNew:string;
  location:string;
 }

export class EmployeeShiftUser implements Action {
  readonly type = EmployeeShiftActionTypes.User;

  constructor(public payload: ESUser) {
  }
}

export class EmployeeShiftName implements Action {
  readonly type = EmployeeShiftActionTypes.Name;

  constructor(public payload: { name: string }) {
  }
}

export class EmployeeShiftChange implements Action {
  readonly type = EmployeeShiftActionTypes.Change;

  constructor(public payload: ESChange) {
  }
}

export class EmployeeShiftList implements Action {
  readonly type = EmployeeShiftActionTypes.List;
}

export type EmployeeShiftUnionActions =EmployeeShiftUser | EmployeeShiftName | EmployeeShiftChange | EmployeeShiftList;
