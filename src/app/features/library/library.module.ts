import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LibraryComponent } from './pages/library/library.component';
import { LibraryRoutingModule } from './library-routing.module';
import { UserNavigationComponent } from './components/user-navigation/user-navigation.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AlbumTracksComponent } from './pages/album-tracks/album-tracks.component';

@NgModule({
  declarations: [LibraryComponent, UserNavigationComponent, AlbumTracksComponent],
  imports: [
    CommonModule,
    LibraryRoutingModule,
    SharedModule
  ]
})
export class LibraryModule { }
