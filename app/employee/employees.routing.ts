import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmployeeListComponent }    from './employee-list.component';
import { EmployeeNewComponent }  from './employee-new.component';

import { CanDeactivateGuard }    from './can-deactivate-guard.service';

const employeesRoutes: Routes = [
  { path: 'employees',  component: EmployeeListComponent },
  { path: 'employee/new', component: EmployeeNewComponent, canDeactivate: [CanDeactivateGuard] }
];

export const employeesRouting: ModuleWithProviders = RouterModule.forChild(employeesRoutes);

