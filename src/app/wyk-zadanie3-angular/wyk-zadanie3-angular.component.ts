import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wyk-zadanie3-angular',
  templateUrl: './wyk-zadanie3-angular.component.html',
  styleUrls: ['./wyk-zadanie3-angular.component.css'],
})
export class WykZadanie3AngularComponent implements OnInit {
  public max = 16;
  public currentNumber = 0;
  name: string;
  pref: any;
  list: any[] = [];
  preferences: { key: number; value: string }[];
  editIndex: number;

  constructor() {
    this.name = '';
    this.preferences = [
      { key: 1, value: 'voe' },
      { key: 2, value: 'angular' },
      { key: 3, value: 'react' },
    ];
  }

  ngOnInit(): void {}

  public add() {
    console.log('WCHODZE', this.name);
    if (this.name != '' && this.list.length < 16) {
      this.list.push({ name: this.name, preferences: this.pref });
      this.name = '';
    }
  }

  public removeStudent(people) {
    let index: number;
    index = this.list.indexOf(people);
    this.list.splice(index, 1);
  }

  public clear() {
    this.list = [];
  }
  public addOne() {
    if (this.currentNumber == 16) {
      alert('to many');
      return;
    }
    if (this.currentNumber <= this.max) {
      this.currentNumber++;
    }
  }

  public removeOne() {
    if (this.currentNumber > 0) {
      this.currentNumber--;
    }
  }
  public edit(student: any, index: number) {
    this.name = student.name;
    this.pref = student.preferences;
    this.editIndex = index;
  }
  public save() {
    if (this.editIndex != null) {
      this.list[this.editIndex].preferences = this.pref;
      this.list[this.editIndex].name = this.name;
    }
  }
}
