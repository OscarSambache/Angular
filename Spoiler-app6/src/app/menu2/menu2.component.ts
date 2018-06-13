import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-menu2',
  templateUrl: './menu2.component.html',
  styleUrls: ['./menu2.component.css']
})
export class Menu2Component implements OnInit {
  @Input()  urlMenu2:string;
  @Input() nombreMenu2:string;
  constructor() { }

  ngOnInit() {
  }

}
