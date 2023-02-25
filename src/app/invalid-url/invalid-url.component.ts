import { Component } from '@angular/core';

@Component({
  selector: 'app-invalid-url',
  template: `
    <img src="https://www.erecordsusa.com/Content/images/404error.png" alt="" class="center">
  `,
  styles: [
    `.center {
      display: block;
      height:100%;
      margin-left: auto;
      margin-right: auto;
    }`
  ]
})
export class InvalidURLComponent {

}
