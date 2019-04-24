import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-billing-admin-role-edit',
  templateUrl: './billing-admin-role-edit.component.html',
  styleUrls: ['./billing-admin-role-edit.component.css']
})
export class BillingAdminRoleEditComponent implements OnInit {

  roleForm: FormGroup;
  mode:string;

  constructor(private formBuilder: FormBuilder,private route: ActivatedRoute) {
    const id = this.route.snapshot.params['id'];
    this.mode = (+id==0?'new':'edit');
  }

  ngOnInit() {
    this.roleForm = this.formBuilder.group({
      'roleName': [''],
      'roleDescription': ['']
    })
  }

  saveRole() {
    alert("Save called");
  }

  cancel(){
    alert("Cancel Clicked");
  }

}
