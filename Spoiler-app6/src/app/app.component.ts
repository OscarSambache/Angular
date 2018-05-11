import { Component } from '@angular/core';

@Component({
  selector: 'app-root', //selector o etiqueta, donde se va a cargar el componente
  templateUrl: './app.component.html',//estructura
  styleUrls: ['./app.component.css']//estilos
})
export class AppComponent {
  nombre= 'Oscar';
  apellido= 'Sambache';
  edad=22;
  sueldo=1;
  fechaNacimiento= new Date('1995-12-21');
  nombreBoton = "Cambiar color";
  nombreClase= 'sa-titulo';
  cambiarClaseTitulo(){
    const nombreClaseEsTitulo= this.nombreClase === 'sa-titulo';
    if(nombreClaseEsTitulo){
      this.nombreClase = 'sa-subtitulo';
    }
    else{
      this.nombreClase='sa-titulo'
    }
  }
  aplicarClase(valorInput: string){
    this.nombreClase = valorInput;
  }
}
