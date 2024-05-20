import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, retry } from 'rxjs';
import { CatImage, DetailsCat } from '../../core/models/cat.model';
import { CatService } from '../../core/services/cat.service';
import { environment } from 'environments/enviroment'; // Importa la configuración del entorno

@Injectable({
  providedIn: 'root' // Registra el servicio en el nivel raíz del inyector
})
export class CatApiService implements CatService {
  private apiUrl = environment.url; // URL base de la API obtenida del entorno

  constructor(private http: HttpClient) { }

  /**
   * Obtiene una lista de gatos según una búsqueda opcional.
   * @param search Término de búsqueda opcional.
   * @returns Observable que emite un array de objetos DetailsCat.
   */
  getCats(search: string): Observable<DetailsCat[]> {
    let url = `breeds`; // URL de la API para obtener la lista de razas
    if (search) url += `/search?q=${search}`; // Agrega el parámetro de búsqueda si está presente
    return this.http.get<DetailsCat[]>(this.apiUrl + url).pipe(
      retry(3) // Intenta la solicitud hasta 3 veces en caso de error
    );
  }

  /**
   * Obtiene los detalles de un gato por su ID.
   * @param id ID del gato.
   * @returns Observable que emite un objeto DetailsCat.
   */
  getForId(id: string): Observable<DetailsCat> {
    const url = `breeds/${id}`; // URL de la API para obtener los detalles de una raza por su ID
    return this.http.get<DetailsCat>(this.apiUrl + url).pipe(
      retry(3) // Intenta la solicitud hasta 3 veces en caso de error
    );
  }

  /**
   * Obtiene la imagen de un gato por su ID.
   * @param id ID de la imagen del gato.
   * @returns Observable que emite un objeto CatImage.
   */
  getImage(id: string): Observable<CatImage> {
    const url = `images/${id}`; // URL de la API para obtener la imagen de un gato por su ID
    return this.http.get<CatImage>(this.apiUrl + url).pipe(
      retry(3) // Intenta la solicitud hasta 3 veces en caso de error
    );
  }
}
