import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Patient} from "../models/Patient";
import {Observable, of} from "rxjs";


@Injectable()
export class RegistrationService {
  constructor(private http: HttpClient){}

  getAllRegisteredPatients(): Observable<Patient>{
    return this.http.get('http://localhost:4200/assets/billing-mock-data/registration-list.json')
  }

  getRegisteredPatientById(id: Number): Observable<Patient>{
    return of({})
  }

  updateRegisteredPatient(patient: Patient): Observable<Patient>{
    return of({})
  }

  deletePatient(id: Number): void {}

  registerPatient(patient: Patient) : Observable<Patient> {
    return this.http.get('http://localhost:4200/assets/billing-mock-data/registration-list-update.json');
  }



}
