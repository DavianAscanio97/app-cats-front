import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { TableModule } from 'primeng/table';
import { CatListComponent } from './cat-list.component';
import { CatFacade } from 'src/app/application/cat/cat.facade';
import { of } from 'rxjs';
import { DetailsCat } from 'src/app/core/models/cat.model';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { PaginatorModule } from 'primeng/paginator';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { DialogModule } from 'primeng/dialog';
import { FormsModule } from '@angular/forms';
import { TagModule } from 'primeng/tag';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { DataViewModule } from 'primeng/dataview';

describe('CatListComponent', () => {
  let component: CatListComponent;
  let fixture: ComponentFixture<CatListComponent>;
  let catFacadeSpy: jasmine.SpyObj<CatFacade>;

  // Configuración inicial de las pruebas
  beforeEach(async () => {
    // Creamos un objeto espía para el CatFacade con los métodos getCats y getImage
    const catFacadeSpyObj = jasmine.createSpyObj('CatFacade', ['getCats', 'getImage']);
    // Definimos los valores de retorno para los métodos getCats y getImage
    catFacadeSpyObj.getCats.and.returnValue(of([]));
    catFacadeSpyObj.getImage.and.returnValue(of({}));

    // Configuramos el módulo de pruebas
    await TestBed.configureTestingModule({
      declarations: [CatListComponent],
      imports: [
        HttpClientModule,
        TableModule,
        ProgressSpinnerModule,
        ButtonModule,
        CardModule,
        PaginatorModule,
        TableModule,
        InputTextModule,
        DropdownModule,
        DialogModule,
        FormsModule,
        TagModule,
        NoopAnimationsModule,
        DataViewModule
      ],
      providers: [
        // Proporcionamos el objeto espía del CatFacade como un valor de proveedor
        { provide: CatFacade, useValue: catFacadeSpyObj }
      ]
    })
      .compileComponents();

    // Obtenemos una referencia al objeto espía del CatFacade
    catFacadeSpy = TestBed.inject(CatFacade) as jasmine.SpyObj<CatFacade>;
  });

  // Configuración previa a cada prueba
  beforeEach(() => {
    // Creamos una instancia del componente
    fixture = TestBed.createComponent(CatListComponent);
    // Obtenemos una referencia al componente
    component = fixture.componentInstance;
    // Ejecutamos la detección de cambios
    fixture.detectChanges();
  });

  // Prueba: Verificar que el componente se crea correctamente
  it('debería crearse correctamente', () => {
    expect(component).toBeTruthy();
  });

  // Prueba: Verificar que la tabla se carga con los gatos correctamente
  it('debería cargar la tabla con los gatos correctamente', async () => {
    // Creamos una lista de gatos de muestra
    const mockCats: DetailsCat[] = [
      { id: '1', name: 'Gato 1', reference_image_id: '1', image: 'imagen-url-1' },
      { id: '2', name: 'Gato 2', reference_image_id: '2', image: 'imagen-url-2' }
    ];
    // Definimos el valor de retorno del método getCats del CatFacade con la lista de gatos de muestra
    catFacadeSpy.getCats.and.returnValue(of(mockCats));

    // Llamamos al método para cargar la tabla
    await component.loadTable();

    // Verificamos que la lista de gatos del componente sea igual a la lista de gatos de muestra
    expect(component.cats).toEqual(mockCats);
  });

  // Prueba: Verificar que se muestra el diálogo cuando se llama al método showDialog
  it('debería mostrar el diálogo cuando se llama al método showDialog', () => {
    // Definimos un ID de gato de muestra
    const mockId = '1';
    // Llamamos al método para mostrar el diálogo
    component.showDialog(mockId);
    // Verificamos que la bandera displayDialog sea verdadera
    expect(component.displayDialog).toBe(true);
    // Verificamos que el ID del gato sea el mismo que el ID de muestra
    expect(component.catId).toBe(mockId);
  });

  // Prueba: Verificar que se oculta el diálogo cuando se llama al método hideDialog
  it('debería ocultar el diálogo cuando se llama al método hideDialog', () => {
    // Llamamos al método para ocultar el diálogo
    component.hideDialog();
    // Verificamos que la bandera displayDialog sea falsa
    expect(component.displayDialog).toBe(false);
  });
});
