import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { EmployeeListComponent }    from './employee-list.component';
import { EmployeeNewComponent }  from './employee-new.component';

import { EmployeeFilterPipe } from './filter';
import { SearchBox } from './search-box';

import { EmployeeService } from './employee.service';
import { employeesRouting } from './employees.routing';

import { DialogService }  from './dialogs/dialog.service';

import { ControlMessagesComponent } from './control-messages.component';
import { ValidationService } from './validation.service';

import { CanDeactivateGuard }    from './can-deactivate-guard.service';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    employeesRouting
  ],
  declarations: [
    ControlMessagesComponent,
    EmployeeListComponent,
    EmployeeNewComponent,
    EmployeeFilterPipe,
    SearchBox
  ],
  providers: [
    EmployeeService,
    DialogService,
    ValidationService,
    CanDeactivateGuard
  ]
})
export class EmployeeModule {}

