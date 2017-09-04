import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { RootComponent } from './root.component';
import { LoginComponentComponent } from './login-component/login-component.component';

@NgModule({
  declarations: [
    RootComponent,
    LoginComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [RootComponent]
})
export class RootModule { }
