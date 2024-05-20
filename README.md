# AppCatsFront

Este proyecto es una aplicación web desarrollada en Angular que permite explorar información sobre diferentes razas de gatos. Conecta con una API para obtener datos sobre las razas de gatos y muestra detalles, imágenes y otra información relevante.

## Instalación

1. Clona este repositorio en tu máquina local.
2. Asegúrate de tener Node.js (v20.12.2) y npm instalados en tu sistema.
3. Ejecuta `npm install` en la raíz del proyecto para instalar todas las dependencias.

## Librerías utilizadas

- [Angular](https://angular.io): Un framework de desarrollo para construir aplicaciones web modernas y escalables.
- [PrimeNG](https://www.primefaces.org/primeng/): Una librería de componentes UI para Angular.
- [RxJS](https://rxjs.dev): Una librería para la programación reactiva en JavaScript.

## Descripción del proyecto

La aplicación AppCatsFront es una interfaz de usuario interactiva que permite a los usuarios explorar y conocer más sobre las razas de gatos. Proporciona una amplia gama de funcionalidades, como la visualización de detalles de las razas de gatos, imágenes de cada raza, búsqueda de razas específicas y más.

## Conexión con la API

La aplicación se conecta a una API externa que proporciona datos sobre diferentes razas de gatos. La API ofrece endpoints para obtener detalles de las razas de gatos, imágenes asociadas, características específicas y más. La comunicación con la API se realiza utilizando solicitudes HTTP a través del servicio CatFacade.

Para obtener más información sobre la API de gatos, consulta la documentación oficial en [https://developers.thecatapi.com/view-account/ylX4blBYT9FaoVd6OhvR?report=bOoHBz-8t](https://developers.thecatapi.com/view-account/ylX4blBYT9FaoVd6OhvR?report=bOoHBz-8t).


## Ejecución de pruebas unitarias

El proyecto cuenta con pruebas unitarias para garantizar la calidad del código y la funcionalidad de los componentes. A continuación, se detallan los pasos para ejecutar las pruebas unitarias:

1. Asegúrate de haber instalado todas las dependencias del proyecto utilizando el comando `npm install`.
2. Ejecuta el comando `ng test` en la raíz del proyecto para iniciar la ejecución de las pruebas unitarias.
3. Las pruebas unitarias se ejecutarán en un navegador y mostrarán los resultados en la consola de salida. También se generará un informe detallado de las pruebas en la carpeta `coverage` del proyecto.

### Descripción de las pruebas unitarias

- **CatListComponent**: Esta prueba verifica que el componente CatListComponent cargue correctamente la lista de gatos y muestre los detalles de cada uno de ellos. Se prueba la funcionalidad de carga de datos, filtrado y visualización de detalles.
- **CatDetailsComponent**: Esta prueba verifica que el componente CatDetailsComponent cargue correctamente los detalles de un gato específico y muestre la imagen asociada. Se prueba la funcionalidad de carga de datos y visualización de detalles.

