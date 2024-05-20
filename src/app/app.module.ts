// Importaciones de módulos y componentes necesarios
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { CatListComponent } from './presentation/cat/cat-list/cat-list.component';
import { CatDetailsComponent } from './presentation/cat/cat-details/cat-details.component';

// Importaciones de módulos de PrimeNG para los componentes de presentación
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { PaginatorModule } from 'primeng/paginator';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { DialogModule } from 'primeng/dialog';
import { TableModule } from 'primeng/table';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { TagModule } from 'primeng/tag';
import { DataViewModule } from 'primeng/dataview';

// Importaciones de servicios e infraestructura
import { CatFacade } from './application/cat/cat.facade';
import { CatApiService } from './infrastructure/api/cat.api.service';

// Definición del módulo principal de la aplicación
@NgModule({
  declarations: [
    // Declaración de componentes
    AppComponent,
    CatListComponent,
    CatDetailsComponent,
  ],
  imports: [
    // Importación de módulos necesarios
    BrowserModule,
    BrowserAnimationsModule, // Módulo de animaciones para PrimeNG
    HttpClientModule, // Módulo para hacer peticiones HTTP
    ButtonModule,
    CardModule,
    PaginatorModule,
    TableModule,
    InputTextModule,
    DropdownModule,
    DialogModule,
    FormsModule,
    TagModule,
    NoopAnimationsModule, // Módulo de animaciones (opcional)
    ProgressSpinnerModule,
    DataViewModule
  ],
  providers: [
    // Definición de los servicios a utilizar
    CatFacade,
    { provide: 'CatService', useClass: CatApiService } // Proveedor para el servicio CatApiService
  ],
  bootstrap: [AppComponent] // Componente raíz de la aplicación
})
export class AppModule { }
