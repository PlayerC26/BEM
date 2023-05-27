import { Component } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  
  mostrar: boolean = false;
  mensaje: string = 'hola';
  mensaje_enlace: string = 'Mostrar';

  mostrarOcultar(){

    if(this.mostrar){
      this.mostrar = false;
      this.mensaje_enlace = 'Mostrar';
    }else{
      this.mostrar = true;
      this.mensaje_enlace = 'Ocultar';
    }
  }

}
