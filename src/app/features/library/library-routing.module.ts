import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AlbumTracksComponent } from "./pages/album-tracks/album-tracks.component";

import { LibraryComponent } from "./pages/library/library.component";

const routes: Routes = [
    {path: '', pathMatch: 'full', component: LibraryComponent},
    {path: 'tracks/:libraryAlbumId', component: AlbumTracksComponent}
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    declarations: []
})
export class LibraryRoutingModule {}