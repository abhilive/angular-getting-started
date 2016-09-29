import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }   from './app.component';

import { routing, appRoutingProviders } from './app.routing';

import { EmployeeModule } from './employee/employee.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    EmployeeModule
  ],
  declarations: [
    AppComponent,
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}