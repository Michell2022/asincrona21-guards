import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class PermisosDingresoGuard implements CanActivate {

  logeado!:string;

  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // return false;

    this.logeado = String(localStorage.getItem('condicion'));

    if (this.logeado == 'true') {

      return true;
    } else {
      Swal.fire('Para ingresar, primero debe logearse')
      return false;
    }
  }
  veriUser(): boolean {
    return false;
  }

}

