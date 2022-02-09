import {Component, Input, OnInit} from '@angular/core';
import {ApiService} from "../../services/api.service";

@Component({
  selector: 'app-people-page',
  templateUrl: './people-page.component.html',
  styleUrls: ['./people-page.component.css']
})
export class PeoplePageComponent implements OnInit {

  people!: Person[];

  peopleUrl: string = '/api/people'

  personToEdit!: Person;

  constructor(private api: ApiService) {
  }

  ngOnInit(): void {
    this.loadData()
  }

  loadData(): void{
    this.api.get(this.peopleUrl).subscribe(({data}: any): void => {
      this.people = data;
      // this.loadData()
    });
  }

  removeSubject(id: number) {
    this.people = this.people.filter(p => p.id !== id);
  }

  addPerson(person: Person) {
    //   let maxId = 0;
    //   this.people.forEach(p => maxId = p.id > maxId ? p.id : maxId);
    //   person.id = maxId + 1;
    //
    //   this.people.push(person);
    // }
    this.api.post(this.peopleUrl, person).subscribe(({data: person}: any): void => {
      if (person.id) {
        // this.people =
      } else {
        this.people = [...this.people, person]
      }
    });
  }
  removePerson(id: number) {
    this.api.delete(`${this.peopleUrl}/${id}`).subscribe((): void => {
      this.people = this.people.filter((p) => p.id !== id);
    });
  }

  setEditPerson(person: Person) {
    this.personToEdit = person;
  }
}
