"use strict";
var router_1 = require('@angular/router');
var employee_list_component_1 = require('./employee-list.component');
var employee_new_component_1 = require('./employee-new.component');
var can_deactivate_guard_service_1 = require('./can-deactivate-guard.service');
var employeesRoutes = [
    { path: 'employees', component: employee_list_component_1.EmployeeListComponent },
    { path: 'employee/new', component: employee_new_component_1.EmployeeNewComponent, canDeactivate: [can_deactivate_guard_service_1.CanDeactivateGuard] }
];
exports.employeesRouting = router_1.RouterModule.forChild(employeesRoutes);
//# sourceMappingURL=employees.routing.js.map