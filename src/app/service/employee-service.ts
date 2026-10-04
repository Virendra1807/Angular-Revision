import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  apiUrl: string = "https://localhost:7238/api/EmployeeAPI"


  getAllEmployees() {
    return this.http.get<any>(this.apiUrl + "/GetAllEmp");
  }

}
