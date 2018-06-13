import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-pelicula-imagen',
  templateUrl: './pelicula-imagen.component.html',
  styleUrls: ['./pelicula-imagen.component.css']
})
export class PeliculaImagenComponent implements OnInit {
  @Input() urlImagen: string;
  @Input() nombrePelicula: string;

  constructor() { }

  ngOnInit() {
  }

}
