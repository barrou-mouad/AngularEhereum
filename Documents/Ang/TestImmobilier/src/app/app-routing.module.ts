import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountComponent } from './count/count.component';
import { GetCountComponent } from './get-count/get-count.component';

const routes: Routes = [
{path:"login",component:GetCountComponent},
{path:"count",component:CountComponent},
{path:"",redirectTo:"count",pathMatch:"full"}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

