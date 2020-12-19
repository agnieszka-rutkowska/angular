import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public max = 16;
  public currentNumber = 0;

  public inc() {
    if (this.currentNumber == 16) {
      alert('to many');
      return;
    }
    if (this.currentNumber <= this.max) {
      this.currentNumber++;
    }
  }

  public des() {
    if (this.currentNumber > 0) {
      this.currentNumber--;
    }
  }
}
