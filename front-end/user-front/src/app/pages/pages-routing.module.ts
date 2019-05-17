import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { LandingComponent } from './landing/landing.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: 'landing',
        component: LandingComponent
      },
      //   {
      //     path: 'iot-dashboard',
      //     component: DashboardComponent,
      //   },
      //   {
      //     path: 'scheduler',
      //     loadChildren: './scheduler/scheduler.module#SchedulerModule',
      //   },
      //   {
      //     path: 'patients',
      //     loadChildren: './patients/patients.module#PatientsModule',
      //   },

      {
        path: '',
        redirectTo: 'landing',
        pathMatch: 'full'
      },
      {
        path: '**',
        component: LandingComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {}
