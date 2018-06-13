import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registar-usuario',
  templateUrl: './registar-usuario.component.html',
  styleUrls: ['./registar-usuario.component.css']
})
export class RegistarUsuarioComponent implements OnInit {
  nombre='';
  email='';
  password='';


  constructor() { }

  ngOnInit() {
  }
  leerDatos(inputNombre: string, inputEmail: string, inputPassword:string) {
     this.nombre = inputNombre;
     this.email = inputEmail;
     this.password = inputPassword;
     console.log('Nombre', this.nombre);
     console.log('Email', this.email);
     console.log('Contraseña', this.password);

    }
}
