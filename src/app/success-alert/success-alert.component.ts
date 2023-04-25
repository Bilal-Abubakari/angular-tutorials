import { Component } from '@angular/core';

@Component({
  selector: 'app-success-alert',
  templateUrl: './success-alert.component.html',
  styleUrls: ['./success-alert.component.css']
})
export class SuccessAlertComponent {
  passMark: number = 80;
  typedWord: string = "Hello"
  isChangeable: boolean = true;

  loginStatus: string = 'logged out'

  constructor() {
    setTimeout(() => {
      this.isChangeable = false;
    }, 5000)
  }

  login() {
    this.loginStatus = 'logged in'
  }

  updateInput(event: Event) {
    this.typedWord = (<HTMLInputElement>event.target).value;
  }
 getMark() {
   return this.passMark;
 }
}
