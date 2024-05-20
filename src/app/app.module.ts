// app.module.ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';

// Importar componentes de presentación

// Importar servicios e infraestructura
import { CatFacade } from './application/cat/cat.facade';
import { CatApiService } from './infrastructure/api/cat.api.service';
import { CatListComponent } from './presentation/cat/cat-list/cat-list.component';

import { ButtonModule } from 'primeng/button';

// Registrar todos los módulos y servicios
@NgModule({
  declarations: [
    AppComponent,
    CatListComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ButtonModule
  ],
  providers: [
    CatFacade,
    { provide: 'CatService', useClass: CatApiService }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
