import { CommonModule } from '@angular/common';
import { Component, signal, ViewChild, ViewContainerRef } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Child } from './child/child';
import { EmployeeModel } from './datatypes/employee-model';
import { DynamicComponentAtRuntime } from './dynamic-component-at-runtime/dynamic-component-at-runtime';
import { EmployeeService } from './service/employee-service';
import { ProductsDetails } from './services/products-details';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, Child, CommonModule, ReactiveFormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  constructor(private prodService: ProductsDetails, private empSer: EmployeeService) { }

  protected readonly title = signal('angular-tut');

  userName = signal("Viren Mali");

  users = signal(["Brus", "Mike", 'Ronda']);

  newUser = signal("");

  AddNewUser() {
    this.users.update(item => [...item, this.newUser()]);
    this.newUser.set("");
  }


  selectedUserName = signal<string | undefined>("");

  selectedUserParent(name: string | undefined) {
    this.selectedUserName.set(name);
  }

  DeletedUserParent(user: string) {
    this.users.update(data => data.filter((item) => item != user));
  }


  @ViewChild('container', { read: ViewContainerRef })

  container!: ViewContainerRef | undefined;

  loadComponentDyn() {
    this.container?.clear();

    this.container?.createComponent(DynamicComponentAtRuntime);
  }

  prods = signal<any>("");

  ngOnInit() {
    this.prodService.getProducts().subscribe((data) => {
      this.prods.set(data.products);
      console.log(data.products)
    });

  }

  showEmpList = signal<EmployeeModel[]>([]);
  getAllEmp() {
    this.empSer.getAllEmployees().subscribe({
      next: (data) => {
        console.log(data);
        this.showEmpList.set(data);
      },
      error: (err) => {
        console.error(err.message);
        console.error(err.status);
      }
    })
  }
  AddEmpData = new FormGroup({

    employeeName: new FormControl("", {
      validators: [Validators.required],
      nonNullable: true
    }),

    designation: new FormControl("FSD", {
      nonNullable: true
    }),

    department: new FormControl<string | null>(null)

  });

  get formGetter() {
    return this.AddEmpData;
  }

  statusMessage = signal<string>("");
  addEmp() {
    const empdata: EmployeeModel = this.AddEmpData.getRawValue();

    console.log(this.AddEmpData.value);
    if (this.AddEmpData.valid) {
      this.empSer.addNewEmp(empdata).subscribe({
        next: (res) => {
          this.statusMessage.set(res);
        },
        error: (err) => {
          console.log(err.message, err.status)
          this.statusMessage.set(err.message + err.status);
        }
      })
    }
  }



}
