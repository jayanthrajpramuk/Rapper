import { Component, OnInit } from '@angular/core';
import {AgGridLinkRenderer} from "../../../core/ag-grid-renderers/ag-grid-link-renderer";
import {Router} from "@angular/router";

@Component({
  selector: 'app-billing-admin-home',
  templateUrl: './billing-admin-home.component.html',
  styleUrls: ['./billing-admin-home.component.css']
})
export class BillingAdminHomeComponent implements OnInit {

  frameworkComponents;
  context;


  constructor(private router:Router) { }

  ngOnInit() {
  }
  columnDefs = [
    {headerName: 'Make', field: 'make', cellRenderer: "agGridLinkRenderer"},
    {headerName: 'Model', field: 'model' },
    {headerName: 'Price', field: 'price'}
  ];

  rowData = [
    { make: 'Toyota', model: 'Celica', price: 35000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Porsche', model: 'Boxter', price: 72000 }
  ];

  gridOptions = {
    enableSorting: true,
    enableFilter: true,
    enableStatusBar: true,
    enableRangeSelection: true,
    rowDragManaged: true,
    headerHeight: 50,
    rowHeight: 50
  }

  frameworkComponents = {
    agGridLinkRenderer: AgGridLinkRenderer

  };

  methodFromParent(cell) {
    this.router.navigate(['/billing/admin/patients']);
  }

  context = { componentParent: this };


}
