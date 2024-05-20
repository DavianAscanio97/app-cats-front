import { Component, EventEmitter, Input, Output } from '@angular/core'
import { LazyLoadEvent } from 'primeng/api'; // Importa LazyLoadEvent de PrimeNG
import { lastValueFrom } from 'rxjs';
import { CatFacade } from 'src/app/application/cat/cat.facade'; // Importa el servicio CatFacade
import { DetailsCat } from 'src/app/core/models/cat.model'; // Importa el modelo DetailsCat

@Component({
  selector: 'app-cat-details',
  templateUrl: './cat-details.component.html',
  styleUrls: ['./cat-details.component.scss'], // Archivo de estilos SCSS
})
export class CatDetailsComponent {
  loading: boolean = false; // Indicador de carga
  cat!: DetailsCat; // Objeto DetailsCat para almacenar los detalles del gato
  image!: string; // URL de la imagen del gato
  @Input() displayDialog: boolean = false; // Propiedad de entrada para mostrar/ocultar el diálogo
  @Input() id: string = ''; // Propiedad de entrada para el ID del gato
  @Output() closed = new EventEmitter(); // Evento emitido al cerrar el diálogo

  constructor(private catFacade: CatFacade) { } // Inyecta el servicio CatFacade en el constructor

  /**
   * Método de inicialización del componente.
   * Carga los detalles del gato al iniciar el componente.
   */
  async ngOnInit() {
    this.loading = true; // Activa el indicador de carga
    await this.loadCatId(); // Carga los detalles del gato por ID
    this.loading = false; // Desactiva el indicador de carga una vez completada la carga
  }

  /**
   * Carga los detalles del gato por su ID.
   */
  async loadCatId() {
    this.cat = await lastValueFrom(this.catFacade.getForId(this.id)); // Obtiene los detalles del gato por ID
    this.loadImage(this.cat.reference_image_id || ''); // Carga la imagen del gato
  }

  /**
   * Carga la imagen del gato por su ID.
   * @param id ID de la imagen del gato.
   */
  async loadImage(id: string) {
    const image = await lastValueFrom(this.catFacade.getImage(id)); // Obtiene la imagen del gato por ID
    this.image = image.url // Asigna la URL de la imagen a la propiedad image
  }

  /**
   * Oculta el diálogo y emite el evento 'closed'.
   */
  hideDialog() {
    this.displayDialog = false; // Oculta el diálogo
    this.closed.emit(); // Emite el evento 'closed'
  }

}
