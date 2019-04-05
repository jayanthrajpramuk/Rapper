// points to rember when creating the action file.
// #1 an enum, which will have list of all action
// #2 action class for each enum.(payload is optional. If payLoad is needed then payload type needs to be defined. (inline ir separate interface
//  #3 an union of all action classes ))

import {Action} from "@ngrx/store";

export enum RootActions {
  AccessedApplication = '[Root State] AccessedApplication'
}

export class RootAccessedApplication implements Action {
  readonly type = RootActions.AccessedApplication;

  constructor(public payload: { username: string; age: Number; gender: string }) {
  }
}

export type RootAccessedApplicationActionsUnion = RootAccessedApplication;
