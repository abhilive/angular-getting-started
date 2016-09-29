// TODO SOMEDAY: Feature Componetized like HeroCenter
import { Component, OnInit }   from '@angular/core';
import { Router }              from '@angular/router';
import { Employee, EmployeeService }   from './employee.service';

import {DialogService} from './dialogs/dialog.service';

@Component({
  template: `
    <section>
      <div class="container">
        <div class="row btn-row">
            <div class="col-xs-12 text-right">
                <button (click)="addNewEmployees()" class="btn btn-success">Add Record</button>
            </div>
        </div>
        <div class="row">
          <div class="col-sm-12">
            <div id="dataTables-example_filter" class="text-left">
              <label>
                <search-box (update)="term = $event"></search-box>
              </label>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-12">
            <table class="table table-striped table-bordered table-hover">
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Name</th>
                  <th>Phone</th>
                  <th>Email</th>
                  <th>Action</th>
                </tr>
                </thead>
              <tbody>
                <tr *ngFor="let employee of service.employees | employeeFilter : term">
                  <td>{{employee.id}}</td>
                  <td>{{employee.name}}</td>
                  <td>{{employee.phone}}</td>
                  <td>{{employee.email}}</td>
                  <td><button class="btn-link" href="#" (click)="onSelect(employee)">Detail</button>&nbsp;<button class="btn-link"(click)="onDelete(employee)">Delete</button></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  `
})
export class EmployeeListComponent implements OnInit {
  employees: Employee[];

  constructor(
    private router: Router,
    private service: EmployeeService,
    private dialogService: DialogService) { }
    ngOnInit() {
      //this.service.getEmployees().then(employees => this.employees = employees);
      //this.employees = this.service.employees;
    }
    onSelect(employee: Employee) {
      //this.router.navigate(['/employee', employee.id]);
      this.dialogService.confirm('Hello '+employee.name+' !!');
    }
    onDelete(employee: Employee){
      this.dialogService.confirm('Would you really want to delete this Employee? '+employee.name);
    }
    addNewEmployees() { this.router.navigate(['/employee/new']); }
}

