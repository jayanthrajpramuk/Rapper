import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {catchError} from 'rxjs/internal/operators';

@Injectable({
  providedIn: 'root'
})
export class BillService {

  constructor(private http: HttpClient) {
  }

  loadBill() {
    return this.http.get('http://localhost:4200/assets/billing-mock-data/bill.json')
  }

  ChangeLanguage() {
    return 'Namma Kannada';

  }

  loadAllBills() {

  }

  loadBillById(id : string) {

  }

  loadBillByCriteria(crit : Object) {

  }

}
