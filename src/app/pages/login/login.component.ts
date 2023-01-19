import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public formLogin!: FormGroup;
  reciboMasterx!: any[];

  

  condi = "true";

  constructor(private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formLogin = this.formBuilder.group({
      userInput: ['',
        [
          Validators.required,
          Validators.maxLength(15)
        ]
      ],
      passInput: ['',
        [
          Validators.required,
          Validators.minLength(4)
        ]
      ]
    })
  }

  validar() {
    let recibo = localStorage.getItem('usuarioMasterx');

    if (recibo != null) this.reciboMasterx = JSON.parse(recibo)

    for (let i of this.reciboMasterx) {
      if (i.usuario == this.formLogin.value.userInput && i.password == this.formLogin.value.passInput) {
        
        localStorage.setItem('condicion', this.condi);
        alert("BIENVENIDO");
      } else {
        alert("INCORRECTOS");
      }
    }
  }


}
