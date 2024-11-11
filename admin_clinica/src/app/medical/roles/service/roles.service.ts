import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { URL_SERVICIOS } from 'src/app/Config/config';
import { AuthService } from 'src/app/shared/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class RolesService {

  constructor(
    public http: HttpClient,
    public authService: AuthService,
    
  ) { }

  listRoles(){
    const headers = new HttpHeaders({'Authorization': 'Bearer ' + this.authService.token})
    const URL = URL_SERVICIOS + '/roles';
    return this.http.get(URL, {headers});
  }

  showRoles(role_id: any){
    const headers = new HttpHeaders({'Authorization': 'Bearer ' + this.authService.token})
    const URL = URL_SERVICIOS + '/roles/' + role_id;
    return this.http.get(URL, {headers});
  }


  storeRoles( data: any){
    const headers = new HttpHeaders({'Authorization': 'Bearer ' + this.authService.token})
    const URL = URL_SERVICIOS + '/roles';
    return this.http.post(URL, data, {headers});
  }



  editRoles(data: any, id_role: any){
    const headers = new HttpHeaders({'Authorization': 'Bearer ' + this.authService.token})
    const URL = URL_SERVICIOS + '/roles/' + id_role;
    return this.http.put(URL, data, {headers});
  }


  deleteRoles(id_role: any){
    const headers = new HttpHeaders({'Authorization': 'Bearer ' + this.authService.token})
    const URL = URL_SERVICIOS + '/roles/' + id_role;
    return this.http.delete(URL, {headers});
  }

}
