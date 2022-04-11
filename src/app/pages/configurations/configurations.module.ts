import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfigurationsRoutingModule } from './configurations-routing.module';
import { ConfigurationEditComponent } from './configuration-edit/configuration-edit.component';


@NgModule({
  declarations: [
    ConfigurationEditComponent
  ],
  imports: [
    CommonModule,
    ConfigurationsRoutingModule
  ]
})
export class ConfigurationsModule { }
