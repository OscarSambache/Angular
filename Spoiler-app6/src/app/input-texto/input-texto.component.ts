import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-input-texto',
  templateUrl: './input-texto.component.html',
  styleUrls: ['./input-texto.component.css']
})
export class InputTextoComponent implements OnInit {
  @Input() textoInput: string;
  valorTextoInput: string;

  constructor() { }

  ngOnInit() {
  }

}
