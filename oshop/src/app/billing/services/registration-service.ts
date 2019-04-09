import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Patient} from "../models/Patient";

@Injectable()
export class RegistrationService {
  constructor(private http: HttpClient){}

  getAllRegisteredPatients(){}

  getRegisteredPatientById(id: Number){}

  updateRegisteredPatient(patient: Patient){}

  deletePatient(id: Number){}

}
