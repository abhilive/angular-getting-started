import { Component, OnInit} from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Router, ActivatedRoute } from '@angular/router';

import { Employee, EmployeeService } from './employee.service';
import { ValidationService } from './validation.service';

import { DialogService }  from './dialogs/dialog.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'employee-new',
  templateUrl: 'app/employee/employee-new.component.html'
})


export class EmployeeNewComponent  {
  employeeForm: FormGroup;
  employee: Employee;
  //private sub: Subscription;

  //public employee: Employee[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: EmployeeService,
    public dialogService: DialogService,
    private formBuilder: FormBuilder) { }

    marital_status = ['Married', 'Unmarried'];
    states = ['state1','state2','state3'];
    cities = ['city1','city2','city3'];

    ngOnInit() {
      this.employeeForm = this.formBuilder.group({
        'id': ['', Validators.required],
        'name': ['', Validators.required],
        'email': ['', [Validators.required, ValidationService.emailValidator]],
        'phone': ['', [Validators.required, Validators.minLength(10)]]
      });
    }

    canDeactivate(): Promise<boolean> | boolean {
      // Allow synchronous navigation (`true`) if no crisis or the crisis is unchanged
      //console.log(this.employeeForm.hasChanges());
      /*if (!this.employee) {
        return true;
      }*/
      if(this.employeeForm.dirty) {
        return this.dialogService.confirm('Discard changes?');;
      }
      return true;
    }

    //employee = new Employee(18, 'Dr IQ', this.marital_status[0], 'Chuck Overstreet'); // For Prefilled Value
    //employee = new Employee('', '', '', '');

    submitted = false;
    active = true;

    newEmployee() {
      this.ngOnInit();
      this.active = false;
      setTimeout(() => this.active = true, 0);
    }

    onSubmit(employee: Employee) {
      if (this.employeeForm.dirty && this.employeeForm.valid) {
        this.submitted = true;
        this.service.addEmployee(employee);
        this.ngOnInit(); //Reset the form this doesn't run the canDeactivate promise
        this.goToEmployees();
      }
    }

    goToEmployees() { 
      this.router.navigate(['']); 
    }
}