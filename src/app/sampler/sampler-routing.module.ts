import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SamplerComponent } from '@app/sampler/sampler.component';

const routes: Routes = [
  {
    path: '',
    component: SamplerComponent,
    children: [
      { path: '', component: SamplerComponent, pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SamplerRoutingModule {
}
