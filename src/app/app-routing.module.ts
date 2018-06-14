import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SectionsComponent } from './sections/sections.component';

const routes: Routes = [{path : "login" ,component: LoginComponent},
                        {path: "" ,component: SectionsComponent} ];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
