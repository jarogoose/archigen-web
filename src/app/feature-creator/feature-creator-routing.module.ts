import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FeatureCreatorPage } from './feature-creator.page';

const routes: Routes = [
  {
    path: '',
    component: FeatureCreatorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeatureCreatorPageRoutingModule {}
