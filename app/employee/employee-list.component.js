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
// TODO SOMEDAY: Feature Componetized like HeroCenter
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var employee_service_1 = require('./employee.service');
var dialog_service_1 = require('./dialogs/dialog.service');
var EmployeeListComponent = (function () {
    function EmployeeListComponent(router, service, dialogService) {
        this.router = router;
        this.service = service;
        this.dialogService = dialogService;
    }
    EmployeeListComponent.prototype.ngOnInit = function () {
        //this.service.getEmployees().then(employees => this.employees = employees);
        //this.employees = this.service.employees;
    };
    EmployeeListComponent.prototype.onSelect = function (employee) {
        //this.router.navigate(['/employee', employee.id]);
        this.dialogService.confirm('Hello ' + employee.name + ' !!');
    };
    EmployeeListComponent.prototype.onDelete = function (employee) {
        this.dialogService.confirm('Would you really want to delete this Employee? ' + employee.name);
    };
    EmployeeListComponent.prototype.addNewEmployees = function () { this.router.navigate(['/employee/new']); };
    EmployeeListComponent = __decorate([
        core_1.Component({
            template: "\n    <section>\n      <div class=\"container\">\n        <div class=\"row btn-row\">\n            <div class=\"col-xs-12 text-right\">\n                <button (click)=\"addNewEmployees()\" class=\"btn btn-success\">Add Record</button>\n            </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-sm-12\">\n            <div id=\"dataTables-example_filter\" class=\"text-left\">\n              <label>\n                <search-box (update)=\"term = $event\"></search-box>\n              </label>\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-sm-12\">\n            <table class=\"table table-striped table-bordered table-hover\">\n              <thead>\n                <tr>\n                  <th>Id</th>\n                  <th>Name</th>\n                  <th>Phone</th>\n                  <th>Email</th>\n                  <th>Action</th>\n                </tr>\n                </thead>\n              <tbody>\n                <tr *ngFor=\"let employee of service.employees | employeeFilter : term\">\n                  <td>{{employee.id}}</td>\n                  <td>{{employee.name}}</td>\n                  <td>{{employee.phone}}</td>\n                  <td>{{employee.email}}</td>\n                  <td><button class=\"btn-link\" href=\"#\" (click)=\"onSelect(employee)\">Detail</button>&nbsp;<button class=\"btn-link\"(click)=\"onDelete(employee)\">Delete</button></td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n        </div>\n      </div>\n    </section>\n  "
        }), 
        __metadata('design:paramtypes', [router_1.Router, employee_service_1.EmployeeService, dialog_service_1.DialogService])
    ], EmployeeListComponent);
    return EmployeeListComponent;
}());
exports.EmployeeListComponent = EmployeeListComponent;
//# sourceMappingURL=employee-list.component.js.map