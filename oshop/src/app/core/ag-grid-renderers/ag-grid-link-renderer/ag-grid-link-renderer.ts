import {ICellRendererAngularComp} from "ag-grid-angular";
import {Component} from "@angular/core";

@Component({
  selector: 'child-cell',
  templateUrl: './ag-grid-link-renderer.html',
  styleUrls: ['./ag-grid-link-renderer.css']
 // template: ``,
})
export class AgGridLinkRenderer implements ICellRendererAngularComp {
  public params: any;

  agInit(params: any): void {
    this.params = params;
  }

  public invokeParentMethod(input) {
    //this.params.context.componentParent.methodFromParent(`Row: ${this.params.node.rowIndex}, Col: ${this.params.colDef.headerName}`)
    this.params.context.componentParent.methodFromParent(this.params)
  }

  refresh(): boolean {
    return false;
  }
}
