import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.css']
})
export class PersonFormComponent implements OnInit, OnChanges {
  personForm!: FormGroup;
  @Input() person: Person | null = null;
  @Output() personEmitter: EventEmitter<Person> = new EventEmitter<Person>();

  constructor() {
  }

  ngOnInit(): void {
    this.loadPerson();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.loadPerson(changes['person'].currentValue);
  }

  savePerson() {
    const personToSave = this.person ? {
      id: this.person.id,
      ...this.personForm.getRawValue()
    } : this.personForm.getRawValue();
    this.personEmitter.emit(personToSave);

    this.personForm.reset();
    this.person = null;
  }

  loadPerson(person?: Person) {
    this.personForm = new FormGroup({
      name: new FormControl(person ? person.name : ''),
      surname: new FormControl(person ? person.surname : ''),
      age: new FormControl(person ? person.age : '')
    });
  }
}
