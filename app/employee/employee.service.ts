import { Injectable } from '@angular/core';
export class Employee {
  constructor(public id: string, public name: string, public phone: string, public email: string) { }
}
/*let EMPLOYEES = [
    new Employee('EMP01', 'Mr. Nice', '7458932311', 'm.nice@mail.com'),
    new Employee('EMP02', 'Narco', '7458932312', 'narco@mail.com'),
    new Employee('EMP03', 'Bombasto', '7458932313', 'bombasto@mail.com'),
    new Employee('EMP04', 'Celeritas', '7458932314', 'celeritas@mail.com'),
    new Employee('EMP05', 'Magneta', '7458932315', 'magneta@mail.com'),
    new Employee('EMP06', 'RubberMan', '7458932316', 'rubberman@mail.com')
];
let employeesPromise = Promise.resolve(EMPLOYEES);*/

@Injectable()
export class EmployeeService {

  employees: Employee[] = [
    new Employee('EMP01', 'Mr. Nice', '7458932311', 'm.nice@mail.com'),
    new Employee('EMP02', 'Narco', '7458932312', 'narco@mail.com'),
    new Employee('EMP03', 'Bombasto', '7458932313', 'bombasto@mail.com'),
    new Employee('EMP04', 'Celeritas', '7458932314', 'celeritas@mail.com'),
    new Employee('EMP05', 'Magneta', '7458932315', 'magneta@mail.com'),
    new Employee('EMP06', 'RubberMan', '7458932316', 'rubberman@mail.com')
  ];
  getEmployees() { 
    return this.employees;
    //return employeesPromise; 
  }

  addEmployee(employee: Employee) {
    this.employees = [...this.employees,employee];
    //employeesPromise.then(employees => employees.push(employee)); //another way to push into array we use promise here.
  }
}

