import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      // {
      //   path: 'dashboard',
      //   component: ECommerceComponent,
      // },
      {
        path: 'landing',
        component: LandingComponent
      },
      {
        path: 'login',
        component: LoginComponent
      },

      {
        path: 'signup',
        component: RegistrationComponent
      },
      // {
      //   path: 'landing',
      //   loadChildren: './landining/landing.module#LandingModule'
      // },
      {
        path: '',
        redirectTo: '',
        pathMatch: 'full'
      }
      // {
      //   path: '**',
      //   component: LandingComponent
      // }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {}
