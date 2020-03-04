import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SamplerComponent } from './sampler.component';
import { SamplerRoutingModule } from './sampler-routing.module';
@NgModule({
  declarations: [SamplerComponent],
  imports: [
    SamplerRoutingModule,
    CommonModule
  ]
})
export class SamplerModule { }
