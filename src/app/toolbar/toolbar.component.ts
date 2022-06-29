import { Component, OnInit } from '@angular/core';
import { Alumnos, AlumnosComponent } from '../alumnos/alumnos.component';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
