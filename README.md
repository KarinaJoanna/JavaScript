<!-- ABOUT THE PROJECT -->
## Ejemplos JavaScript, parte 1

### Programación basada en eventos

### Built With

* HTML
* CSS
* JavaScript

### Prerequisites

Estos son algunos de los programas que se utilizaron y sus extensiones.

* Visual Studio Code
  ```sh
  techer.open-in-browser
  ```
  ```sh
  naumovs.color-highlight
  ```
  
* GitHub Desktop
  
-----

### Ejemplo 0

#### Listeners de Eventos

Imprimamos "Clic" en la Consola Web cuando el usuario haga clic en un
botón.

Necesitamos añadir un escuchador de eventos al botón...

### Ejemplo 1

#### QuerySelector

QuerySelector devuelve null, y no podemos llamar a addEventListener en null.

### Ejemplo 2
#### Sustituir imagen

Sustituir la imagen al hacer clic sobre ella.

### Ejemplo 3

#### Event.currentTarget

La propiedad currentTarget del evento es una referencia al objeto que adjuntamos al evento, en este caso al elemento <img> al que añadimos el listener.

### Ejemplo 4

#### Cambiar texto

Cambiar el texto después que el regalo ha sido abierto, además centraremos la imagen y definiremos un tamaño default para ambas imagenes.

### Ejemplo 5

#### Cambiar los elementos

Podemos seleccionar el elemento h1 luego actualizar su propiedad textContent para cambiar lo que estaba desplegado en h1

### Ejemplo 6

#### Remover elementos vía DOM.

Eliminaremos los Elementos del Nodo padre, agregando nuevos elementos.

### Ejemplo 7

####  Display: none;

Hay otro valor muy útil para display :

display: block;
display: inline;
display: inline-block;
display: flex;
display: none;

desactiva la renderización del elemento y de todos sus hijos. Se trata como si el elemento no estuviera en el documento... pero el contenido (como las imágenes) se sigue cargando.

### Ejemplo 8

#### Extensión.

El único archivo obligatorio de una extensión de Chrome es el manifiesto. Debe estar colocado en el directorio raíz, y comunica los metadatos de la extensión, los permisos y otros archivos involucrados.

Si quieres probar tu extensión en tu máquina local, sólo tienes que ir al menu Configuración —> Extensiones, activar el modo Developer, luego hacer click en Load Unpacked y seleccionar la carpeta donde está tu manifiesto y el resto de los archivos.

### Ejemplo 9

#### Album de fotos.

Crearemos un álbum de fotos con algunas características usando JavaScript

### Ejemplo 10

#### Keyboard event.

Puedes escuchar los eventos del teclado añadiendo el evento al documento: document.addEventListener('keyup', onKeyUp);

### Ejemplo 11

#### Album de fotos.

Agregar movimiento por teclado al ejemplo 9.
