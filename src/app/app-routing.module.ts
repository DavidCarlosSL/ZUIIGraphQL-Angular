import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './core/auth-guard/auth-guard.service';

const routes: Routes = [
  {path: '', pathMatch: 'full', loadChildren: () => import("./features/home/home.module").then(m => m.HomeModule)},
  {path: 'library', loadChildren: () => import("./features/library/library.module").then(m => m.LibraryModule), canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
