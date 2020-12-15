import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { LibraryComponent } from "./pages/library/library.component";

const routes: Routes = [
    {path: '', pathMatch: 'full', component: LibraryComponent}
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    declarations: []
})
export class LibraryRoutingModule {}