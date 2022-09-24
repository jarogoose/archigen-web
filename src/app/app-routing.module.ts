import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'feature-creator',
    loadChildren: () =>
      import('./feature-creator/feature-creator.module').then(
        (m) => m.FeatureCreatorPageModule
      ),
  },
  {
    path: '',
    redirectTo: 'feature-creator',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
