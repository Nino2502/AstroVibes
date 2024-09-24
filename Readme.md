# Introducción al Sistema de Grid de Ionic

## **Objetivo de la Práctica**

- Crear una página en Ionic que utilice el sistema de grid para organizar el contenido de manera responsiva.
- Practicar cómo las columnas y filas se adaptan a diferentes tamaños de pantalla utilizando breakpoints y atributos de Ionic.

## **Paso 1: Configuración del Proyecto**

### **1.1. Crear un Nuevo Proyecto Ionic**

Si aún no tienes un proyecto Ionic configurado, abre tu terminal y ejecuta:

```bash
npm install -g @ionic/cli
ionic start gridPracticeApp blank --type=angular
cd gridPracticeApp
ionic serve
```

Esto instalará el CLI de Ionic, creará un nuevo proyecto llamado `gridPracticeApp` y lo iniciará en el navegador.

### **1.2. Estructura del Proyecto**

El proyecto tendrá la siguiente estructura básica:

```
gridPracticeApp/
├── src/
│   ├── app/
│   │   ├── app-routing.module.ts
│   │   ├── app.component.ts
│   │   └── app.module.ts
│   ├── assets/
│   ├── theme/
│   └── index.html
└── package.json
```

## **Paso 2: Crear una Nueva Página**

### **2.1. Generar la Página `grid-page`**

Ejecuta en la terminal:

```bash
ionic generate page pages/grid-page
```

Esto creará los archivos necesarios para la página:

- `grid-page.module.ts`
- `grid-page.page.ts`
- `grid-page.page.html`
- `grid-page.page.scss`

### **2.2. Configurar el Enrutamiento**

Abre `src/app/app-routing.module.ts` y modifica las rutas:

```typescript
const routes: Routes = [
  { path: '', redirectTo: 'grid-page', pathMatch: 'full' },
  {
    path: 'grid-page',
    loadChildren: () => import('./pages/grid-page/grid-page.module').then(m => m.GridPagePageModule)
  },
];
```

Esto establece `grid-page` como la página de inicio.

## **Paso 3: Implementar el Sistema de Grid**

### **3.1. Comprender la Estructura Básica**

El sistema de grid de Ionic se basa en tres componentes principales:

- `<ion-grid>`: Contenedor principal.
- `<ion-row>`: Define una fila.
- `<ion-col>`: Define una columna dentro de una fila.

### **3.2. Editar `grid-page.page.html`**

Abre `src/app/pages/grid-page/grid-page.page.html` y añade el siguiente código:

```html
<ion-header>
  <ion-toolbar>
    <ion-title>Sistema de Grid de Ionic</ion-title>
  </ion-toolbar>
</ion-header>

<ion-content>
  <!-- Grid básico -->
  <ion-grid>
    <ion-row>
      <ion-col size="12" size-md="6">
        <ion-card>
          <ion-card-header>
            <ion-card-title>Columna 1</ion-card-title>
          </ion-card-header>
          <ion-card-content>
            Esta columna ocupa el 100% en móviles y el 50% en pantallas medianas en adelante.
          </ion-card-content>
        </ion-card>
      </ion-col>
      <ion-col size="12" size-md="6">
        <ion-card>
          <ion-card-header>
            <ion-card-title>Columna 2</ion-card-title>
          </ion-card-header>
          <ion-card-content>
            Comportamiento responsivo similar a la columna 1.
          </ion-card-content>
        </ion-card>
      </ion-col>
    </ion-row>
  </ion-grid>
</ion-content>
```

#### **Explicación:**

- `size="12"`: La columna ocupa el 100% del ancho en pantallas pequeñas.
- `size-md="6"`: La columna ocupa el 50% del ancho en pantallas medianas y grandes.

### **3.3. Añadir Más Filas y Columnas**

Agrega más contenido para visualizar diferentes configuraciones:

```html
<!-- Segunda fila -->
<ion-grid>
  <ion-row>
    <ion-col size="12" size-sm="4" size-lg="2">
      <ion-card>
        <ion-card-header>
          <ion-card-title>Columna A</ion-card-title>
        </ion-card-header>
        <ion-card-content>
          Adaptación múltiple según el tamaño de pantalla.
        </ion-card-content>
      </ion-card>
    </ion-col>
    <!-- Repite para más columnas -->
  </ion-row>
</ion-grid>
```

#### **Explicación:**

- `size-sm="4"`: Ocupa 4 unidades (aproximadamente un tercio) en pantallas pequeñas.
- `size-lg="2"`: Ocupa 2 unidades (aproximadamente un sexto) en pantallas grandes.

## **Paso 4: Personalizar Estilos**

### **4.1. Editar `grid-page.page.scss`**

Aplica estilos personalizados para mejorar la apariencia:

```scss
ion-card {
  margin: 10px;
}

ion-card-title {
  font-size: 1.2rem;
  color: #3880ff;
}

ion-card-content {
  font-size: 1rem;
}

/* Media queries para ajustes adicionales */
@media (min-width: 768px) {
  ion-card-title {
    font-size: 1.4rem;
  }
}

@media (min-width: 1024px) {
  ion-card-title {
    font-size: 1.6rem;
  }
}
```

### **4.2. Explicación de los Estilos**

- **Margen en las tarjetas:** Añade espacio alrededor de cada tarjeta para evitar que se peguen entre sí.
- **Tamaños de fuente:** Ajusta el tamaño de las fuentes según el tamaño de la pantalla para mejorar la legibilidad.

## **Paso 5: Alineación y Espaciado Avanzado**

### **5.1. Alineación Horizontal y Vertical**

Utiliza las clases de Ionic para centrar contenido:

```html
<ion-grid>
  <ion-row justify-content-center align-items-center>
    <ion-col size="12" size-md="8">
      <ion-card>
        <ion-card-header>
          <ion-card-title>Centrado Horizontal y Verticalmente</ion-card-title>
        </ion-card-header>
        <ion-card-content>
          Uso de <code>justify-content-center</code> y <code>align-items-center</code>.
        </ion-card-content>
      </ion-card>
    </ion-col>
  </ion-row>
</ion-grid>
```

### **5.2. Espaciado entre Columnas (Gutters)**

Controla el espaciado entre columnas y filas:

```html
<ion-grid fixed>
  <ion-row>
    <ion-col size="6">
      <div class="box">Columna 1</div>
    </ion-col>
    <ion-col size="6">
      <div class="box">Columna 2</div>
    </ion-col>
  </ion-row>
</ion-grid>
```

En el archivo SCSS:

```scss
.box {
  background-color: #f4f5f8;
  text-align: center;
  padding: 20px;
  border: 1px solid #ccc;
}
```

El atributo `fixed` en `<ion-grid>` remueve los gutters (espacios entre columnas), permitiendo un control total sobre el espaciado.

## **Paso 6: Uso de Offsets para Desplazar Columnas**

Desplaza columnas a la derecha utilizando `offset`:

```html
<ion-grid>
  <ion-row>
    <ion-col size="6" offset="3">
      <ion-card>
        <ion-card-header>
          <ion-card-title>Columna Desplazada</ion-card-title>
        </ion-card-header>
        <ion-card-content>
          Esta columna está desplazada 3 unidades a la derecha.
        </ion-card-content>
      </ion-card>
    </ion-col>
  </ion-row>
</ion-grid>
```

## **Paso 7: Prueba en Diferentes Dispositivos**

### **7.1. Uso de Chrome DevTools**

- Presiona `F12` para abrir las herramientas de desarrollo.
- Haz clic en el ícono de dispositivos para alternar la vista responsive.
- Prueba diferentes dimensiones y tipos de dispositivos.

### **7.2. Emuladores y Dispositivos Reales**

- **Emuladores:** Utiliza Android Studio o Xcode para emular dispositivos móviles.
- **Dispositivos Reales:** Conecta tu dispositivo y ejecuta `ionic capacitor run android -l` o `ionic capacitor run ios -l`.

## **Paso 8: Código Completo para `grid-page.page.html`**

```html
<ion-header>
  <ion-toolbar>
    <ion-title>Sistema de Grid de Ionic</ion-title>
  </ion-toolbar>
</ion-header>

<ion-content>
  <!-- Grid básico -->
  <ion-grid>
    <!-- Primera fila -->
    <ion-row>
      <ion-col size="12" size-md="6">
        <!-- Tarjeta Columna 1 -->
      </ion-col>
      <ion-col size="12" size-md="6">
        <!-- Tarjeta Columna 2 -->
      </ion-col>
    </ion-row>
    <!-- Segunda fila -->
    <ion-row>
      <!-- Varias columnas con diferentes tamaños -->
    </ion-row>
    <!-- Fila con alineación centrada -->
    <ion-row justify-content-center>
      <ion-col size="12" size-md="8">
        <!-- Tarjeta Centradas -->
      </ion-col>
    </ion-row>
    <!-- Fila con offset -->
    <ion-row>
      <ion-col size="6" offset="3">
        <!-- Tarjeta Desplazada -->
      </ion-col>
    </ion-row>
  </ion-grid>
</ion-content>
```

## **Paso 9: Mejores Prácticas y Consejos**

- **Mobile-First:** Diseña pensando primero en dispositivos móviles y luego ajusta para pantallas más grandes.
- **Unidades Relativas:** Utiliza `rem` y `em` en lugar de `px` para tamaños de fuente y espaciados.
- **Testeo Constante:** Prueba tu diseño frecuentemente en diferentes tamaños de pantalla durante el desarrollo.

## **Paso 10: Recursos Adicionales**

- **Documentación Oficial de Ionic Grid:** [Ionic Grid Docs](https://ionicframework.com/docs/api/grid)
- **Tutoriales de Responsive Design:** [MDN Responsive Design](https://developer.mozilla.org/es/docs/Learn/CSS/CSS_layout/Responsive_Design)
- **Herramientas de Testing:** [BrowserStack](https://www.browserstack.com/) o [Responsinator](http://www.responsinator.com/)

---
