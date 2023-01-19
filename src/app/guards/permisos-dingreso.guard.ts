import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class PermisosDingresoGuard implements CanActivate {


  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // return false;


    if (this.veriUser()) {
      return true;
    } else {
      Swal.fire('Para ingresar, primero debe logearse')
      // this.router.navigate(['/login']);
      return false;
    }
  }
  veriUser(): boolean {
    return false;
  }

}

