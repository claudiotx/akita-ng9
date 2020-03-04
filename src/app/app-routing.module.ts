import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';

const routes: Routes = [
  {
    path: '',
    component: LandingComponent
  },
  {
    path: 'landing',
    component: LandingComponent
  },
  {
    path: 'grid',
    loadChildren: () => import('@app/grid/grid.module').then((m) => m.GridModule)
  },
  {
    path: 'sampler',
    loadChildren: () => import('./sampler/sampler.module').then((m) => m.SamplerModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
