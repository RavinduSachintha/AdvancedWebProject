import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { LandingComponent } from './landing/landing.component';

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
      // {
      //   path: 'login',
      //   component: Login
      // },
      // {
      //   path: 'landing',
      //   loadChildren: './landining/landing.module#LandingModule'
      // },
      {
        path: '',
        redirectTo: 'landing',
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
