import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-menu1',
  templateUrl: './menu1.component.html',
  styleUrls: ['./menu1.component.css']
})
export class Menu1Component implements OnInit {
  @Input() urlMenu1:string;
  @Input() nombreMenu1:string;
  constructor() { }

  ngOnInit() {
  }

}
