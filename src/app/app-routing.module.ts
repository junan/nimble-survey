import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  // Lazy Loading auth modules, loading it only when the use navigates to the '/auth' route.
  { path: 'auth', loadChildren: () => import(`./modules/auth/auth.module`).then(m => m.AuthModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {
      // This will tell Angular to fetch all the lazy-loaded modules in the background
      // after the first rendering of the app was complete.
      preloadingStrategy: PreloadAllModules
    })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
