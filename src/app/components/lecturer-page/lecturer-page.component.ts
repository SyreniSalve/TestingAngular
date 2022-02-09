import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lecturer-page',
  templateUrl: './lecturer-page.component.html',
  styleUrls: ['./lecturer-page.component.css']
})
export class LecturerPageComponent implements OnInit {
  title = 'EDienynas';
  academy = 'Anykščių muzikos mokykla';
  year = 2021;
  city = 'Vilnius'

  subject = [
    {
      name: 'Piano'
    },
    {
      name: 'Vocal'
    },
    {
      name: 'Violin'
    },
    {
      name: 'Flute'
    }
  ];

  increase(){
    this.year++;
  }

  decrease(){
    this.year--;
  }

  removeSubject(index: number){
    this.subject.splice(index, 1);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
