import {Component, OnInit} from '@angular/core';
import {RegistrationService} from "../services/registration-service";
import {Observable} from "rxjs";
import {Patient} from "../models/Patient";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-register-patient',
  templateUrl: './register-patient.component.html',
  styleUrls: ['./register-patient.component.css']
})
export class RegisterPatientComponent implements OnInit {

  registrationForm: FormGroup;
  public registerPatient$ : Observable<Patient>;
  public patientList$ : Observable<Patient>;
  public patientData$;

  patientData: Patient = {
    id: 1,
    age: 30,
    firstName: "jgihuoih",
    lastName: "ghowhodihweojd"
  }

  gender: Array<string> = [
    'Male',
    'Female',
    'Others'
  ];

  constructor(private registerService: RegistrationService, private formBuilder: FormBuilder) {
    this.registrationForm = this.formBuilder.group({
      'firstName': [''],
      'lastName': [''],
      'age': [''],
      'gender': [''],
      'mobile1': [''],
      'mobile2': [''],
      'emergencyContactNumber': [''],
      'address1': [''],
      'address2': [''],
      'address3': [''],
      'email': [''],
      'referedDoc': ['']
    });
  }

  registerPatient() {

    // get the value from Form
    this.patientList$ = this.registerService.registerPatient(this.patientData);
  }

  deletePatient() {
    // pass the id of the patient
    this.registerService.deletePatient(null);
  }

  updatePatient() {
    // pass the updated information form the form
    this.patientData$ = this.registerService.updateRegisteredPatient(null);
  }


  ngOnInit() {
    this.patientList$ = this.registerService.getAllRegisteredPatients();
  }

}
