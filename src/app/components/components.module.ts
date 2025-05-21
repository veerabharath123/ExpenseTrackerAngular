import { NgModule } from '@angular/core';
import { ComponentsRoutingModule } from './components-routing.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
  ],
  imports: [
    ComponentsRoutingModule,
  ],
  exports:[
    RouterModule
  ],
  providers: [],
  bootstrap: []
})
export class ComponentsModule { }
