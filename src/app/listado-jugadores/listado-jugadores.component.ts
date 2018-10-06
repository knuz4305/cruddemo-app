import { Component, OnInit } from '@angular/core';
import { Jugador } from './Jugador';
import { JugadoesService } from '../jugadoes.service';
import swal from 'sweetalert2';


@Component({
  selector: 'app-listado-jugadores',
  templateUrl: './listado-jugadores.component.html',
  styleUrls: ['./listado-jugadores.component.css']
})
export class ListadoJugadoresComponent implements OnInit {

  jugadores: Jugador[];

  constructor(private jugadoesServive: JugadoesService) { }

  ngOnInit() {
    this.jugadoesServive.getJugadores().subscribe(
      jugadores => this.jugadores = jugadores
    );
  }

  eliminar(jugador: Jugador): void{
    const swalWithBootstrapButtons = swal.mixin({
      confirmButtonClass: 'btn btn-success',
      cancelButtonClass: 'btn btn-danger',
      buttonsStyling: false,
    });

    swalWithBootstrapButtons({
      title: 'Está seguro?',
      text: `Desea Eliminar la Información Asociada al Jugador ${jugador.dorsal}?`,
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, Elimninar!',
      cancelButtonText: 'No, Cancelar!',
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        this.jugadoesServive.elminaJugador(jugador.id).subscribe(
          response => {
            this.jugadores = this.jugadores.filter(j => j !== jugador);
            swalWithBootstrapButtons(
              'Eliminado!',
              `Jugador ${jugador.dorsal} Eliminado con Éxito`,
              'success'
            );
          }
        );
      }
    });
  }
}
