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
var common_1 = require('@angular/common');
var forms_1 = require('@angular/forms');
var employee_list_component_1 = require('./employee-list.component');
var employee_new_component_1 = require('./employee-new.component');
var filter_1 = require('./filter');
var search_box_1 = require('./search-box');
var employee_service_1 = require('./employee.service');
var employees_routing_1 = require('./employees.routing');
var dialog_service_1 = require('./dialogs/dialog.service');
var control_messages_component_1 = require('./control-messages.component');
var validation_service_1 = require('./validation.service');
var can_deactivate_guard_service_1 = require('./can-deactivate-guard.service');
var EmployeeModule = (function () {
    function EmployeeModule() {
    }
    EmployeeModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.ReactiveFormsModule,
                employees_routing_1.employeesRouting
            ],
            declarations: [
                control_messages_component_1.ControlMessagesComponent,
                employee_list_component_1.EmployeeListComponent,
                employee_new_component_1.EmployeeNewComponent,
                filter_1.EmployeeFilterPipe,
                search_box_1.SearchBox
            ],
            providers: [
                employee_service_1.EmployeeService,
                dialog_service_1.DialogService,
                validation_service_1.ValidationService,
                can_deactivate_guard_service_1.CanDeactivateGuard
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], EmployeeModule);
    return EmployeeModule;
}());
exports.EmployeeModule = EmployeeModule;
//# sourceMappingURL=employee.module.js.map