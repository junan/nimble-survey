import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AppComponent } from './app.component';
import { EnsureAuthenticatedUserGuardService } from '@service/guard/ensure-authenticated-user-guard.service';

const routes: Routes = [
  // Lazy Loading auth modules, loading it only when the user navigates to the '/auth' route.
  // It will improve app loading performance as it will load module code on demand.
  { path: 'auth', loadChildren: () => import(`./modules/auth/auth.module`).then(m => m.AuthModule) },
  { path: '', component: AppComponent, canActivate: [EnsureAuthenticatedUserGuardService]  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {
      // This will tell Angular to fetch all the lazy-loaded modules in the background
      // after the first rendering of the app was complete.
      // Without out PreloadAllModules, app will load the lazy-loaded modules on demand
      // when user navigate to module path `/auth`.
      // PreloadAllModules makes it faster to load the all the lazy-loaded modules in the background.
      // Then when user navigate to the module path `/auth` it does not need to load the modules code
      // as it is already loaded in the background.
      preloadingStrategy: PreloadAllModules
    })],
  exports: [RouterModule]
})

export class AppRoutingModule {}
