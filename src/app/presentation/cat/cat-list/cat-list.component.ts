import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { Table, TableLazyLoadEvent } from 'primeng/table'; // Importa las clases relacionadas con la tabla de PrimeNG
import { lastValueFrom } from 'rxjs';
import { CatFacade } from 'src/app/application/cat/cat.facade'; // Importa el servicio CatFacade
import { DetailsCat } from 'src/app/core/models/cat.model'; // Importa el modelo DetailsCat

@Component({
  selector: 'app-cat-list',
  templateUrl: './cat-list.component.html',
  styleUrls: ['./cat-list.component.scss'] // Archivo de estilos SCSS
})
export class CatListComponent implements OnInit {

  @ViewChild('dt1') dt1!: Table; // Referencia a la tabla de PrimeNG
  cats: DetailsCat[] = []; // Lista de gatos
  displayDialog: boolean = false; // Indicador para mostrar/ocultar el diálogo
  catId: string = ''; // ID del gato seleccionado
  loading: boolean = false; // Indicador de carga
  selectedItem: string = ''; // Elemento seleccionado en la tabla
  isTable: boolean = false; // Indica si es una tabla

  constructor(private catFacade: CatFacade, private cdr: ChangeDetectorRef) { }

  /**
   * Método de inicialización del componente.
   */
  async ngOnInit() {
    await this.loadTable(); // Carga la tabla al iniciar el componente
  }

  /**
   * Carga la tabla de gatos.
   * @param event Evento de carga de datos (opcional).
   * @param type Tipo de carga ('filter' o 'search').
   */
  async loadTable(event?: TableLazyLoadEvent | Event, type = 'filter') {
    let search = ''
    if (type === 'search') {
      event = event as Event;
      search = (event.target as HTMLInputElement).value;
      if (search === '' && this.isTable) this.dt1.clear(); // Limpia la tabla si la búsqueda está vacía y ya hay datos en la tabla
    }
    this.loading = true; // Activa el indicador de carga
    const cats = await lastValueFrom(this.catFacade.getCats(search)); // Obtiene la lista de gatos
    this.cats = await Promise.all(cats.map(async (cat: DetailsCat) => {
      if (cat.reference_image_id) {
        const image = await lastValueFrom(this.catFacade.getImage(cat.reference_image_id)); // Obtiene la imagen del gato
        cat.image = image.url; // Asigna la URL de la imagen al objeto del gato
      }
      return cat; // Devuelve el objeto del gato modificado
    }));
    this.loading = false; // Desactiva el indicador de carga una vez completada la carga de la tabla
  }

  /**
   * Muestra el diálogo para un gato específico.
   * @param id ID del gato.
   */
  showDialog(id: string) {
    this.displayDialog = true; // Muestra el diálogo
    this.catId = id; // Asigna el ID del gato seleccionado
  }

  /**
   * Oculta el diálogo.
   */
  hideDialog() {
    this.displayDialog = false; // Oculta el diálogo
  }

  /**
   * Aplica el filtro de búsqueda.
   * @param event Evento de entrada de texto.
   * @returns Término de búsqueda.
   */
  applyFilter(event: Event) {
    return (event.target as HTMLInputElement).value; // Retorna el término de búsqueda ingresado por el usuario
  }
}
