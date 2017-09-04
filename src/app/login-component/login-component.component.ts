import { Component, OnInit, ViewEncapsulation } from '@angular/core';


@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  styles: [`
    #login {
      background-color: red;
    }
    input, button {
      width: 200px !important;
      margin: 5px;
    }
  `]
})
export class LoginComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
