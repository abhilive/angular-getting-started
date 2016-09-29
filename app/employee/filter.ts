import {Injectable, Pipe} from '@angular/core';

@Pipe({
    name: 'employeeFilter'
})
@Injectable()
export class EmployeeFilterPipe {
    //transform(items: any[], args: any[]): any {
    transform(value, term) {
    	//return value.filter((item) => item.name.startsWith(term));
        //return items.filter(item => (item.id.toString().indexOf(args[0] || '') !== -1) || (item.name.toString().indexOf(args[0] || '') !== -1));
        // Added Lower case searching.
        return value.filter(item => 
        	(item.id.toString().indexOf(term) !== -1) || (item.id.toString().toLowerCase().indexOf(term) !== -1) || 
            (item.name.toString().indexOf(term) !== -1) || (item.name.toString().toLowerCase().indexOf(term) !== -1) || 
        	(item.phone.toString().indexOf(term) !== -1) || (item.phone.toString().toLowerCase().indexOf(term) !== -1) || 
            (item.email.toString().indexOf(term) !== -1) || (item.email.toString().toLowerCase().indexOf(term) !== -1)
        );
        //return ((item.name.indexOf($scope.query || '')) !== -1 || (item.id.toString().indexOf($scope.query || '')) !== -1);
    }
}