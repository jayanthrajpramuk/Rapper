
import {ICellRendererAngularComp} from "ag-grid-angular";
import {Component} from "@angular/core";

@Component({
  selector: 'child-cell',
  template: `<span><a (click)="invokeParentMethod()">link</a></span>`,
})
export class AgGridLinkRenderer implements ICellRendererAngularComp {
  public params: any;

  agInit(params: any): void {
    this.params = params;
  }

  public invokeParentMethod(e) {

  console.log(this.params);

   this.params.context.componentParent.methodFromParent(`Row: ${this.params.node.rowIndex}, Col: ${this.params.colDef.headerName}`)
  }

  refresh(): boolean {
    return false;
  }
}
