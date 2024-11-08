import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RolesComponent } from './roles.component';
import { AddRoleUserComponent } from './add-role-user/add-role-user.component';
import { ListRoleUserComponent } from './list-role-user/list-role-user.component';

const routes: Routes = [
  { 
    path: '',
    component: RolesComponent,
    children: [
      {
        path: 'register',
        component: AddRoleUserComponent,
      },
      {
        path: 'list',
        component: ListRoleUserComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RolesRoutingModule { }
