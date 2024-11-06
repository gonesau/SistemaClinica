import { Component } from '@angular/core';
import { DataService } from 'src/app/shared/data/data.service';

@Component({
  selector: 'app-add-role-user',
  templateUrl: './add-role-user.component.html',
  styleUrls: ['./add-role-user.component.scss']
})
export class AddRoleUserComponent {
  sideBar:any = [];
  name = '';
  permissions:any = [];
  constructor(
    public DataService: DataService,
  ) { 
    
  }

  ngOnInit(): void {
    this.sideBar = this.DataService.sideBar[0].menu;
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
    console.log(this.name, this.permissions);
  }
}
