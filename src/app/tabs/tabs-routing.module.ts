import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'calculator',
        loadChildren: () => import('../calculator/calculator.module').then(m => m.CalculatorModule)
      },
      {
        path: 'community',
        loadChildren: () => import('../community/community.module').then(m => m.CommunityModule)
      },
      {
        path: 'information',
        loadChildren: () => import('../information/information.module').then(m => m.InformationModule)
      },
      {
        path: '',
        redirectTo: '/calculator',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/calculator',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
