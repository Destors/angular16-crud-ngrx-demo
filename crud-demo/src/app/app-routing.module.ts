import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './ui/layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'products-page',
      },
      {
        path: 'products-page',
        loadChildren: () =>
          import('./products/page/products-page.module').then(
            (m) => m.ProductsPageModule
          ),
      },
      {
        path: 'auth-page',
        loadComponent: () =>
          import('./auth/page/auth-page.component').then(
            (m) => m.AuthPageComponent
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
