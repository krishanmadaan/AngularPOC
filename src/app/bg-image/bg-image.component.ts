import { Component } from '@angular/core';

@Component({
  selector: 'app-bg-image',
  template: `
   <img src="https://ppsp-test-az.optumhealthfinancial.com/images/slide3.jpg"/>
  `,
  styles: [
   `img{
    margin-top:20px;
    width:100%;
    height:500px;
   }`
  ]
})
export class BgImageComponent {

}
