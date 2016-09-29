import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/*import { EmployeeListComponent }    from './employee/employee-list.component';*/

const appRoutes: Routes = [
	{ path: '', redirectTo: '/employees', pathMatch: 'full' },
  	/*{ path: 'crisis-center', loadChildren: 'app/crisis-center/crisis-center.module#CrisisCenterModule' },*/
  	/*{ path: 'heroes', component: HeroListComponent }*/
];

export const appRoutingProviders: any[] = [
];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
