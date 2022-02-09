import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-datatable-page',
  templateUrl: './datatable-page.component.html',
  styleUrls: ['./datatable-page.component.css']
})
export class DatatablePageComponent implements OnInit {
  @Input() people: Person[] = []
  @Output() remove: EventEmitter<number> = new EventEmitter<number>();
  @Output() removeEmitter: EventEmitter<number> = new EventEmitter<number>();
  @Output() editEmitter: EventEmitter<Person> = new EventEmitter<Person>();
  displayedColumns: string[] = ['position', 'name', 'surname', 'age', 'action'];

  constructor() {
  }

  ngOnInit(): void {
  }

  removeRow(id: number) {
    this.remove.emit(id);
  }

  removePerson(id: number) {
    this.removeEmitter.emit(id);
  }

  editPerson(person: Person) {
    this.editEmitter.emit(person);
  }

}
