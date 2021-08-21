import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetComponent } from './get/get.component';
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [{path:'get', component: GetComponent},
{path:'menu', component: MenuComponent},
{ path: "", redirectTo: "/menu", pathMatch: "full" },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
