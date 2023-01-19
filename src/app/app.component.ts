import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  // CREO MI USUARIO Y CONTRASEÑA MAESTRA
  usuarioMaster = [{ usuario: 'michell', password: '123456' }];

  constructor() { }

  ngOnInit(): void {
    // MIS DATOS SE CREARAN AL ESTAR DENTRO DE ngOnInit Y SE AGREGARAN EN EL LocalStorage.
    localStorage.setItem('usuarioMasterx', JSON.stringify(this.usuarioMaster));
  }

}
