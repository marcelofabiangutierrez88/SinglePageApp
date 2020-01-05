import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes-tarjeta',
  templateUrl: './heroes-tarjeta.component.html',
})
export class HeroesTarjetaComponent implements OnInit {

  @Input()heroe:any={};
  @Input() indice :number ;
  @Output() heroeSeleccionado: EventEmitter<number>;

  constructor(private router : Router) {
    this.heroeSeleccionado = new EventEmitter();
   }

  ngOnInit() {
  }

  verHeroe(){
    // console.log(this.indice);
    this.router.navigate(['/heroe',this.indice]);
    // this.heroeSeleccionado.emit(this.indice);
  }

}
