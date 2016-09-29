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
var forms_1 = require('@angular/forms');
var router_1 = require('@angular/router');
var employee_service_1 = require('./employee.service');
var validation_service_1 = require('./validation.service');
var dialog_service_1 = require('./dialogs/dialog.service');
var EmployeeNewComponent = (function () {
    //private sub: Subscription;
    //public employee: Employee[] = [];
    function EmployeeNewComponent(route, router, service, dialogService, formBuilder) {
        this.route = route;
        this.router = router;
        this.service = service;
        this.dialogService = dialogService;
        this.formBuilder = formBuilder;
        this.marital_status = ['Married', 'Unmarried'];
        this.states = ['state1', 'state2', 'state3'];
        this.cities = ['city1', 'city2', 'city3'];
        //employee = new Employee(18, 'Dr IQ', this.marital_status[0], 'Chuck Overstreet'); // For Prefilled Value
        //employee = new Employee('', '', '', '');
        this.submitted = false;
        this.active = true;
    }
    EmployeeNewComponent.prototype.ngOnInit = function () {
        this.employeeForm = this.formBuilder.group({
            'id': ['', forms_1.Validators.required],
            'name': ['', forms_1.Validators.required],
            'email': ['', [forms_1.Validators.required, validation_service_1.ValidationService.emailValidator]],
            'phone': ['', [forms_1.Validators.required, forms_1.Validators.minLength(10)]]
        });
    };
    EmployeeNewComponent.prototype.canDeactivate = function () {
        // Allow synchronous navigation (`true`) if no crisis or the crisis is unchanged
        //console.log(this.employeeForm.hasChanges());
        /*if (!this.employee) {
          return true;
        }*/
        if (this.employeeForm.dirty) {
            return this.dialogService.confirm('Discard changes?');
            ;
        }
        return true;
    };
    EmployeeNewComponent.prototype.newEmployee = function () {
        var _this = this;
        this.ngOnInit();
        this.active = false;
        setTimeout(function () { return _this.active = true; }, 0);
    };
    EmployeeNewComponent.prototype.onSubmit = function (employee) {
        if (this.employeeForm.dirty && this.employeeForm.valid) {
            this.submitted = true;
            this.service.addEmployee(employee);
            this.ngOnInit(); //Reset the form this doesn't run the canDeactivate promise
            this.goToEmployees();
        }
    };
    EmployeeNewComponent.prototype.goToEmployees = function () {
        this.router.navigate(['']);
    };
    EmployeeNewComponent = __decorate([
        core_1.Component({
            selector: 'employee-new',
            templateUrl: 'app/employee/employee-new.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router, employee_service_1.EmployeeService, dialog_service_1.DialogService, forms_1.FormBuilder])
    ], EmployeeNewComponent);
    return EmployeeNewComponent;
}());
exports.EmployeeNewComponent = EmployeeNewComponent;
//# sourceMappingURL=employee-new.component.js.map