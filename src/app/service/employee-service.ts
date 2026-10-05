import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EmployeeModel } from '../datatypes/employee-model';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  apiUrl: string = "https://localhost:7238/api/EmployeeAPI"


  getAllEmployees() {
    return this.http.get<EmployeeModel[]>(`${this.apiUrl}/GetAllEmp`);
  }

  addNewEmp(data: EmployeeModel) {
    return this.http.post(`${this.apiUrl}/AddEmployee`,
      data,
      { responseType: 'text' }
    )
  }



}
