import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AboutComponent } from "./about/about.component";
import { BlogComponent } from "./blog/blog.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { ProjectsComponent } from "./projects/projects.component";

const routes: Routes = [
  { path: "about", component: AboutComponent },
  { path: "blog", component: BlogComponent },
  { path: "projects", component: ProjectsComponent },
  { path: "", redirectTo: "/about", pathMatch: "full" },
  { path: "**", component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
