import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
 
const routes: Routes = [
        { path: '', component: AboutmeComponent },
        { path: 'me', component: AboutmeComponent },
        { path: 'projects', component: ProjectsComponent },
        { path: 'contact', component: ContactComponent }


];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ]
})
export class AppRoutingModule {}