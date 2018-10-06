import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Jugador } from './listado-jugadores/Jugador';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class JugadoesService {

  private urlSerivico = 'http://localhost:8080/dataService/plantilla';
  private urlCreacion = 'http://localhost:8080/dataService/creaJugador';
  private urlRecupera = 'http://localhost:8080/dataService/recuperaJugador';
  private urlActualiza = 'http://localhost:8080/dataService/actualizaJugador';
  private urlElimina = 'http://localhost:8080/dataService/borrarJugador';

  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }

  // Uses http.get() to load data from a single API endpoint
  getJugadores() {
    return this.http.get(this.urlSerivico).pipe(
      map(response => response as Jugador[])
    );
  }

  crear(jugador: Jugador): Observable<Jugador> {
    return this.http.post<Jugador>(this.urlCreacion, jugador, {headers: this.httpHeaders});
  }

  getJugador(dorsal): Observable<Jugador> {
    return this.http.get<Jugador>(`${this.urlRecupera}?dorsal=${dorsal}`);
  }

  actualizaJugador(jugador: Jugador): Observable<Jugador> {
    return this.http.put<Jugador>(`${this.urlActualiza}`, jugador, {headers: this.httpHeaders});
  }

  elminaJugador(id: number): Observable<Jugador> {
    console.log('eliminar');
    console.log(`${this.urlElimina}/${id}`);
    return this.http.delete<Jugador>(`${this.urlElimina}/${id}`, {headers: this.httpHeaders});
  }

}
