import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LibraryComponent } from './pages/library/library.component';
import { LibraryRoutingModule } from './library-routing.module';
import { UserNavigationComponent } from './components/user-navigation/user-navigation.component';

@NgModule({
  declarations: [LibraryComponent, UserNavigationComponent],
  imports: [
    CommonModule,
    LibraryRoutingModule
  ]
})
export class LibraryModule { }
