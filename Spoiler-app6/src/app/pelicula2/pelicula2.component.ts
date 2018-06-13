import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-pelicula2',
  templateUrl: './pelicula2.component.html',
  styleUrls: ['./pelicula2.component.css']
})
export class Pelicula2Component implements OnInit {
  @Input() urlImagen: string;
  @Input() descripcionImagen: string;
  @Input() nombrePelicula: string;
  @Input() descripcionPelicula: string;
  @Input() esEstreno: boolean;
  textoEstreno: string;
  claseEstreno: string;
  constructor() { }

  ngOnInit() {
    if (this.esEstreno) {
      this.textoEstreno = 'Estreno';
      this.claseEstreno = 'sa-color-estado-rosado';
    } else {
      this.textoEstreno = 'Proximamente';
      this.claseEstreno = 'sa-color-estado-amarillo';
    }
  }

}
