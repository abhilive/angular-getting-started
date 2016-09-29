"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var Employee = (function () {
    function Employee(id, name, phone, email) {
        this.id = id;
        this.name = name;
        this.phone = phone;
        this.email = email;
    }
    return Employee;
}());
exports.Employee = Employee;
/*let EMPLOYEES = [
    new Employee('EMP01', 'Mr. Nice', '7458932311', 'm.nice@mail.com'),
    new Employee('EMP02', 'Narco', '7458932312', 'narco@mail.com'),
    new Employee('EMP03', 'Bombasto', '7458932313', 'bombasto@mail.com'),
    new Employee('EMP04', 'Celeritas', '7458932314', 'celeritas@mail.com'),
    new Employee('EMP05', 'Magneta', '7458932315', 'magneta@mail.com'),
    new Employee('EMP06', 'RubberMan', '7458932316', 'rubberman@mail.com')
];
let employeesPromise = Promise.resolve(EMPLOYEES);*/
var EmployeeService = (function () {
    function EmployeeService() {
        this.employees = [
            new Employee('EMP01', 'Mr. Nice', '7458932311', 'm.nice@mail.com'),
            new Employee('EMP02', 'Narco', '7458932312', 'narco@mail.com'),
            new Employee('EMP03', 'Bombasto', '7458932313', 'bombasto@mail.com'),
            new Employee('EMP04', 'Celeritas', '7458932314', 'celeritas@mail.com'),
            new Employee('EMP05', 'Magneta', '7458932315', 'magneta@mail.com'),
            new Employee('EMP06', 'RubberMan', '7458932316', 'rubberman@mail.com')
        ];
    }
    EmployeeService.prototype.getEmployees = function () {
        return this.employees;
        //return employeesPromise; 
    };
    EmployeeService.prototype.addEmployee = function (employee) {
        this.employees = this.employees.concat([employee]);
        //employeesPromise.then(employees => employees.push(employee)); //another way to push into array we use promise here.
    };
    EmployeeService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], EmployeeService);
    return EmployeeService;
}());
exports.EmployeeService = EmployeeService;
//# sourceMappingURL=employee.service.js.map