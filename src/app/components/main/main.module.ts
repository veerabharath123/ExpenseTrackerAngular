import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MainComponent } from './main.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MainRoutingModule } from './main-routing.module';

@NgModule({
  declarations: [
    MainComponent,
    NavBarComponent
  ],
  imports: [
    MainRoutingModule
  ],
  providers: [],
  bootstrap: []
})
export class MainModule { }
