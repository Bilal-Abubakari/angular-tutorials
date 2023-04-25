import { Component } from '@angular/core';

@Component({
  selector: 'app-display-details',
  templateUrl: './display-details.component.html',
  styleUrls: ['./display-details.component.css']
})
export class DisplayDetailsComponent {
  display = false
  timeStamps = []
  toggleDisplay () {
    this.display = !this.display;
    // @ts-ignore
    // const number = this
    // @ts-ignore
    this.timeStamps.push(new Date())
  }
}
