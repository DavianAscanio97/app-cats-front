import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CatImage, DetailsCat } from '../../core/models/cat.model';
import { CatService } from '../../core/services/cat.service';

@Injectable({
  providedIn: 'root'
})
export class CatFacade {
  constructor(@Inject('CatService') private catService: CatService) { }
  // Constructor que inyecta el servicio CatService utilizando la inyección de dependencias de Angular

  /**
   * Obtiene una lista de gatos basada en un término de búsqueda.
   * @param search Término de búsqueda para filtrar la lista de gatos.
   * @returns Observable que emite una lista de objetos DetailsCat.
   */
  getCats(search: string): Observable<DetailsCat[]> {
    return this.catService.getCats(search);
  }

  /**
   * Obtiene los detalles de un gato específico según su ID.
   * @param id ID del gato cuyos detalles se desean obtener.
   * @returns Observable que emite un objeto DetailsCat.
   */
  getForId(id: string): Observable<DetailsCat> {
    return this.catService.getForId(id);
  }

  /**
   * Obtiene la imagen de un gato específico según su ID.
   * @param id ID del gato del que se desea obtener la imagen.
   * @returns Observable que emite un objeto CatImage.
   */
  getImage(id: string): Observable<CatImage> {
    return this.catService.getImage(id);
  }
}
