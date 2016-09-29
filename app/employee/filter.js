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
var EmployeeFilterPipe = (function () {
    function EmployeeFilterPipe() {
    }
    //transform(items: any[], args: any[]): any {
    EmployeeFilterPipe.prototype.transform = function (value, term) {
        //return value.filter((item) => item.name.startsWith(term));
        //return items.filter(item => (item.id.toString().indexOf(args[0] || '') !== -1) || (item.name.toString().indexOf(args[0] || '') !== -1));
        // Added Lower case searching.
        return value.filter(function (item) {
            return (item.id.toString().indexOf(term) !== -1) || (item.id.toString().toLowerCase().indexOf(term) !== -1) ||
                (item.name.toString().indexOf(term) !== -1) || (item.name.toString().toLowerCase().indexOf(term) !== -1) ||
                (item.phone.toString().indexOf(term) !== -1) || (item.phone.toString().toLowerCase().indexOf(term) !== -1) ||
                (item.email.toString().indexOf(term) !== -1) || (item.email.toString().toLowerCase().indexOf(term) !== -1);
        });
        //return ((item.name.indexOf($scope.query || '')) !== -1 || (item.id.toString().indexOf($scope.query || '')) !== -1);
    };
    EmployeeFilterPipe = __decorate([
        core_1.Pipe({
            name: 'employeeFilter'
        }),
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], EmployeeFilterPipe);
    return EmployeeFilterPipe;
}());
exports.EmployeeFilterPipe = EmployeeFilterPipe;
//# sourceMappingURL=filter.js.map