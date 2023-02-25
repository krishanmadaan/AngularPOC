import { Component } from '@angular/core';

@Component({
  selector: 'app-optum-financial-logo',
  template: `
    <img class="logo" src="https://optumpaystaticpt.z19.web.core.windows.net/Optum_Financial_logo_without_bg.png" >
  `,
  styles: [
    `.logo{ width:248px}`,
    `img{height:32px}`
  ]
})
export class OptumFinancialLogoComponent {

}
