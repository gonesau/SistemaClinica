import { Component } from '@angular/core';
import { RolesService } from '../service/roles.service';
import { DataService } from 'src/app/shared/data/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-role-user',
  templateUrl: './edit-role-user.component.html',
  styleUrls: ['./edit-role-user.component.scss']
})
export class EditRoleUserComponent {
  sideBar:any = [];
  name = '';
  permissions:any = [];
  valid_form = false;

    role_id:any;

  constructor(
    public DataService: DataService,
    public RoleService: RolesService,
    public activatedRoute: ActivatedRoute,
  ) { 

  }

  ngOnInit(): void {
    this.sideBar = this.DataService.sideBar[0].menu;
    this.activatedRoute.params.subscribe((resp:any) => {
      this.role_id = resp.id;
    }
    );

    this.showRole();

  }

  showRole(){
    this.RoleService.showRoles(this.role_id).subscribe((resp:any) => {
      console.log(resp);
      this.name = resp.name;
      this.permissions = resp.permission_pluck;
    });
  }

  addPermission(subMenu:any){ 
    if(subMenu.permision){
      const INDEX = this.permissions.findIndex((item:any) => item == subMenu.permision);
      if(INDEX != -1){
        this.permissions.splice(INDEX, 1);
      }else{
      this.permissions.push(subMenu.permision);
      }
      console.log(this.permissions);
    }
  }

  save(){
    this.valid_form = false;

    if(!this.name || this.permissions.length == 0){
      this.valid_form = true;
      return;
    }

    const data = {
      name: this.name,
      permisions: this.permissions,
    };
    console.log("enviando", data);
    this.RoleService.storeRoles(data).subscribe((resp:any) => {
      console.log(resp);
      this.name = '';
      this.permissions = [];
    });
  }

}