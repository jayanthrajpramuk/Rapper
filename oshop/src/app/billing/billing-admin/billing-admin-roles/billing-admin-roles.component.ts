import { Component, OnInit } from '@angular/core';
import {AgGridLinkRenderer} from "../../../core/ag-grid-renderers/ag-grid-link-renderer/ag-grid-link-renderer";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-billing-admin-roles',
  templateUrl: './billing-admin-roles.component.html',
  styleUrls: ['./billing-admin-roles.component.css']
})
export class BillingAdminRolesComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }


  addNew() {
    let url = '/billing/admin/roles/0/edit';;
    this.router.navigate([url]);
  }

  columnDefs = [
    {headerName: '#', field: 'id'},
    {headerName: 'Role Name', field: 'roleName'},
    {headerName: 'Description', field: 'roleDescription'},
    {
      headerName: 'Edit',  cellRenderer: "agGridLinkRenderer", cellRendererParams: {
        dataLink: 'edit'
      }
    },
    {
      headerName: 'Delete', cellRenderer: "agGridLinkRenderer", cellRendererParams: {
        dataLink: 'delete'
      }
    }
  ];

  rowData = [
    {id:'1', roleName: 'administrator', roleDescription: 'Data Maintenance'},
    {id:'2',roleName: 'receptionist', roleDescription: 'Entry Level'},
    {id:'3',roleName: 'doctor', roleDescription: 'Doctor'},
    {id:'4',roleName: 'super-admin', roleDescription: 'High'},
    {id:'5',roleName: 'hod', roleDescription: 'HOD for doctors'}
  ];

  gridOptions = {
    enableSorting: true,
    enableFilter: true,
    enableStatusBar: true,
    enableRangeSelection: true,
    rowDragManaged: true,
    headerHeight: 50,
    rowHeight: 50,
    enableBrowserTooltips:true
  }

  frameworkComponents = {
    agGridLinkRenderer: AgGridLinkRenderer
  };

  methodFromParent(cell) {
    const params = cell.data;
    let url;

    if(cell.dataLink == 'edit') {
      url = '/billing/admin/roles/'+params.id+'/edit';
    } else {
      alert('delete')
    }

   this.router.navigate([url]);
  }

  context = {componentParent: this};

}
