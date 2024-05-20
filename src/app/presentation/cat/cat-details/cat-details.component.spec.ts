import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CatDetailsComponent } from './cat-details.component';
import { CatFacade } from 'src/app/application/cat/cat.facade';
import { of } from 'rxjs';
import { DetailsCat, CatImage } from 'src/app/core/models/cat.model';
import { DialogModule } from 'primeng/dialog';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { HttpClientModule } from '@angular/common/http';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

describe('CatDetailsComponent', () => {
  let component: CatDetailsComponent;
  let fixture: ComponentFixture<CatDetailsComponent>;
  let catFacadeSpy: jasmine.SpyObj<CatFacade>;

  beforeEach(async () => {
    // Configura el espía del CatFacade
    const catFacadeSpyObj = jasmine.createSpyObj('CatFacade', ['getForId', 'getImage']);

    // Configura el módulo de pruebas
    await TestBed.configureTestingModule({
      declarations: [CatDetailsComponent],
      imports: [
        HttpClientModule,
        ProgressSpinnerModule,
        ButtonModule,
        CardModule,
        DialogModule,
      ],
      providers: [
        { provide: CatFacade, useValue: catFacadeSpyObj }
      ]
    }).compileComponents();

    // Inicializa el espía del CatFacade
    catFacadeSpy = TestBed.inject(CatFacade) as jasmine.SpyObj<CatFacade>;
  });

  beforeEach(() => {
    // Crea el componente y su fixture
    fixture = TestBed.createComponent(CatDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // Prueba para verificar que el componente se crea correctamente
  it('debería crearse correctamente', () => {
    expect(component).toBeTruthy();
  });

  // Prueba para verificar que los detalles del gato se cargan correctamente al iniciar
  it('debería cargar los detalles del gato al inicializar', async () => {
    // Define los datos de prueba del gato y su imagen asociada
    const mockCat: DetailsCat = { id: '1', name: 'Gato 1', reference_image_id: '1' };
    const mockImage: CatImage = { id: '1', url: 'image-url', breeds: [], width: 100, height: 100 };

    // Configura el espía para devolver los datos de prueba cuando se llaman los métodos correspondientes
    catFacadeSpy.getForId.and.returnValue(of(mockCat));
    catFacadeSpy.getImage.and.returnValue(of(mockImage));

    // Inicia la inicialización del componente
    await component.ngOnInit();

    // Verifica que los datos del gato y la imagen se carguen correctamente en el componente
    expect(component.cat).toEqual(mockCat);
    expect(component.image).toEqual(mockImage.url);
  });
});
