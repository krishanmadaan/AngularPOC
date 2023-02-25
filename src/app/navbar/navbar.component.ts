import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [
    `#nav-bg{
       background: linear-gradient(90deg,
        #422c88,
        #c6383d);
        border-top: 5px solid #434448;
  }`,

  `.nav-link{
         color: white;
         font-weight: bold;
         padding-bottom: 0px;
         
  }`,
  `.nav-item{
    padding: 10px;
  }`,
  `.nav-item a:hover{
     /* border-bottom: 0.5px solid white; */
     border-bottom: 3px solid #2a9d8f;

  }`,
  
    `.navbar{
         height: 57px;
         /* position: fixed; */
         width: 100%;
         position: sticky;
         top: 0px;
    }`,
    `.dropdown-menu{
         background: linear-gradient(90deg,
        #422c88,
        #c6383d);
    }`,
    `.dropdown-item{
      color: white;
      font-family: 'Roboto', sans-serif;
    }`,
    `.ul.dropdown-menu.show{
      margin-top: 0px;
    }`,
    `.dropdown-menu[data-bs-popper] {
        margin-top: 0px;
    }`,
    ` .dropdown-item:focus, .dropdown-item:hover {
       color: #2a9d8f; 
      background-color: purple;
  }`,`
  .nav-item[_ngcontent-lyy-c18] a[_ngcontent-lyy-c18]:hover {
    border-bottom: none;
  }`,`
  .collapse.navbar-collapse {
    padding-bottom: 5px;
  }
  `,`.navbar-nav .nav-link.active, .navbar-nav .show>.nav-link {
    color: white;
}
`
  
  
  ]
})
export class NavbarComponent {

}
