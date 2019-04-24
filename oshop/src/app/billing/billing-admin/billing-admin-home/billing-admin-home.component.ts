import { Component, OnInit } from '@angular/core';
import {AgGridLinkRenderer} from "../../../core/ag-grid-renderers/ag-grid-link-renderer/ag-grid-link-renderer";
import {Router} from "@angular/router";

@Component({
  selector: 'app-billing-admin-home',
  templateUrl: './billing-admin-home.component.html',
  styleUrls: ['./billing-admin-home.component.css']
})
export class BillingAdminHomeComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  }
