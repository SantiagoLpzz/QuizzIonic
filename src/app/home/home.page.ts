import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  constructor() {}
  nombreEvento = new FormControl('');
  fechaInicio = new FormControl('');
  fechaFin = new FormControl('');
  ubicacion = new FormControl('');
  nombreEncargado = new FormControl('');
  telefonoEncargado = new FormControl('');

  eventos: {nombreEvento:string, fechaInicio:string, fechaFin:string, ubicacion:string, nombreEncargado:string, telefonoEncargado:string, completada:boolean}[]=[];

  crearEvento(){
    if(this.nombreEvento.value && this.fechaInicio.value && this.fechaFin.value && this.ubicacion.value && this.nombreEncargado.value && this.telefonoEncargado.value)
    {
      const evento = {
        nombreEvento:this.nombreEvento.value,
        fechaInicio:this.fechaInicio.value,
        fechaFin:this.fechaFin.value,
        ubicacion:this.ubicacion.value,
        nombreEncargado:this.nombreEncargado.value,
        telefonoEncargado:this.telefonoEncargado.value,
        completada:false
    } 
    this.eventos.push(evento);
    this.nombreEvento.setValue('');
    this.fechaInicio.setValue('');
    this.fechaFin.setValue('');
    this.ubicacion.setValue('');
    this.nombreEncargado.setValue('');
    this.telefonoEncargado.setValue('');
    } else{
      alert('Faltan llenar campos');
    }
  }


}
