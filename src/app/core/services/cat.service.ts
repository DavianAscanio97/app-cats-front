import { Observable } from 'rxjs';
import { CatImage, DetailsCat } from '../models/cat.model';

/**
 * Interfaz que define un servicio para obtener datos relacionados con los gatos.
 * Proporciona métodos para obtener listas de gatos, detalles de un gato por ID
 * y obtener imágenes de gatos.
 */
export interface CatService {

  /**
   * Obtiene una lista de gatos opcionalmente filtrada por un término de búsqueda.
   * @param search Término de búsqueda opcional para filtrar la lista de gatos.
   * @returns Observable que emite un array de objetos DetailsCat.
   */
  getCats(search: string): Observable<DetailsCat[]>;

  /**
   * Obtiene los detalles de un gato por su ID.
   * @param id ID del gato.
   * @returns Observable que emite un objeto DetailsCat.
   */
  getForId(id: string): Observable<DetailsCat>;

  /**
   * Obtiene la imagen de un gato por su ID.
   * @param id ID de la imagen del gato.
   * @returns Observable que emite un objeto CatImage.
   */
  getImage(id: string): Observable<CatImage>;
}
