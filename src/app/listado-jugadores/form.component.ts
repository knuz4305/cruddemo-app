import { Component, OnInit } from '@angular/core';
import { Jugador } from './Jugador';
import { JugadoesService } from '../jugadoes.service';
import { Router, ActivatedRoute } from '@angular/router';
import swal from 'sweetalert2';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  private jugador: Jugador = new Jugador();


  constructor(private jugadorService: JugadoesService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.cargarJugador();
  }

  public cargarJugador(): void {
    this.activatedRoute.params.subscribe(params => {
      let dorsal = params['dorsal'];
      if (dorsal) {
        this.jugadorService.getJugador(dorsal).subscribe( (jugador) => this.jugador = jugador);
      }
    });
  }

  public create(): void {
    console.log('crear');
    console.log(this.jugador);

    this.jugadorService.crear(this.jugador)
    .subscribe( response => {
      this.router.navigate(['/plantilla']);
        swal('Creación De Jugador', `Jugador: ${this.jugador.primerApellido} creado con éxito!`, 'success');
      }
    );
  }

  public update(): void {
    this.jugadorService.actualizaJugador(this.jugador)
    .subscribe( cliente => {
      this.router.navigate(['/plantilla']);
      swal('Jugador Actualizado', `Jugador: ${this.jugador.dorsal} Actualidado con Exito`, 'success');
    });
  }

}
