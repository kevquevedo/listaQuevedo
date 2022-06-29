import { JsonPipe } from '@angular/common';
import { ArrayType } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { PipeTransform } from '@angular/core';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent {

  mostrarLista: string = "";
  color: string = "white";

  listaAlumnos: Alumnos[] = [
    {
      nombre: "Kevin",
      apellido: "Quevedo",
      sexo: "M"
    },
    {
      nombre: "Graciela",
      apellido: "Fernandez",
      sexo: "F"
    },
    {
      nombre: "Gaston",
      apellido: "Gutierrez",
      sexo: "M"
    },
    {
      nombre: "Agustina",
      apellido: "Lopez",
      sexo: "F"
    },
    {
      nombre: "Leandro",
      apellido: "Salvatore",
      sexo: "M"
    },
    {
      nombre: "Daniela",
      apellido: "Fiorello",
      sexo: "F"
    },
    {
      nombre: "Matias",
      apellido: "Cinzano",
      sexo: "M"
    }
  ];

  constructor() { }

  ngOnInit(): void { }

  public verLista(caso: string){

    let listaRetorno  = null;
    switch (caso) {

      case 'T':
        listaRetorno = this.listaAlumnos;
        return listaRetorno;

      case 'M':

        listaRetorno = this.listaAlumnos.filter(function(alumno){
          return alumno.sexo == 'M';
        });
        break;

      case 'F':
        listaRetorno = this.listaAlumnos.filter(function(alumno){
          return alumno.sexo == 'F';
        });
        break;
      default:
        return this.listaAlumnos;
        break;
    };

    return listaRetorno;
  };

//   let resultado = listaDeVehiculos.reduce(function (inicio, vehiculo) {
//     if(inicio < parseInt(vehiculo.id)){
//         inicio = parseInt(vehiculo.id);
//     }
//     return inicio;
// },0)
// resultado += 1;
// return resultado;


}

export class Alumnos{

  nombre: string;
  apellido: string;
  sexo: string;

  constructor() {
    this.nombre = "";
    this.apellido = "";
    this.sexo = "";
  }
}
