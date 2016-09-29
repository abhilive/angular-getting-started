import {Component, Output, EventEmitter} from '@angular/core';

@Component({
	selector: 'search-box',
	template: `<div><input #input type="text" (input)="update.emit(input.value)" class="form-control input-sm" placeholder="search.."></div>`
})
export class SearchBox{
	@Output() update = new EventEmitter();

	ngOnInit(){
		this.update.emit('');
	}
}