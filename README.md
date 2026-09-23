# 🍩 ComicSansCon

Aplicación web Single Page Application (SPA) desarrollada como Proyecto Integrador de Henry.

ComicSansCon permite mantener una conversación con Homer Simpson mediante una interfaz de chat integrada con Gemini AI. La aplicación utiliza una arquitectura basada en vistas, navegación mediante History API y una función Serverless de Vercel para comunicarse de forma segura con la API de Gemini.

## 🌐 Demo

| Recurso | Enlace |
|---|---|
| 💻 Aplicación | [ComicSansCon](https://proyecto-integrador-matias.vercel.app) |
| 📦 GitHub | [Repositorio](https://github.com/matiasg2026/Proyecto-M3_Matias-Mancini) |
| 🖥️ Local | http://localhost:3000 |

## 📌 Descripción del proyecto

ComicSansCon es una SPA desarrollada con JavaScript, HTML y CSS que permite interactuar con Homer Simpson mediante inteligencia artificial.

El proyecto fue desarrollado con un enfoque Mobile-First y cuenta con tres vistas principales:

- 🏠 **Home**: presentación de la aplicación y del personaje.
- 💬 **Chat**: espacio principal para conversar con Homer Simpson.
- ℹ️ **About**: información sobre la aplicación y su desarrollo.

La navegación entre las vistas se realiza sin recargar la página utilizando la History API del navegador.

La comunicación con Gemini se realiza mediante una Vercel Serverless Function, evitando exponer la API Key en el código del frontend.

## ✨ Funcionalidades

- 🏠 Navegación SPA entre Home, Chat y About.
- 🔄 Navegación mediante History API.
- ⬅️ Compatibilidad con los botones Atrás y Adelante del navegador.
- 💬 Chat interactivo con Homer Simpson.
- 🤖 Integración con Gemini AI.
- 🎭 Personalidad y tono definidos mediante un System Prompt.
- 🧠 Envío del historial de conversación para mantener el contexto.
- ⏳ Indicador visual durante la generación de respuestas.
- 📜 Scroll automático del chat.
- ⚠️ Manejo de errores de comunicación con la API.
- 📱 Diseño Responsive con enfoque Mobile-First.
- 🧪 Tests unitarios realizados con Vitest.
- 🔐 API Key protegida mediante variables de entorno y Serverless Functions.
- 🚀 Deployment realizado en Vercel.

## 🛠️ Tecnologías utilizadas

- HTML5
- CSS3
- JavaScript (ES Modules)
- Fetch API
- History API
- Gemini AI
- Vercel Serverless Functions
- Vitest
- Git
- GitHub
- Vercel

## 📱 Diseño Responsive — Mobile First

La interfaz fue desarrollada siguiendo el enfoque Mobile-First.

Primero se diseñó la experiencia para dispositivos móviles y posteriormente se utilizaron media queries para adaptar la interfaz a tamaños de pantalla mayores.

La aplicación contempla tres escenarios principales:

- 📱 Mobile
- 📲 Tablet
- 🖥️ Desktop

Se utilizan unidades relativas, Flexbox y media queries para mantener una interfaz adaptable y consistente.

El objetivo es que el contenido del chat, los controles de navegación y las diferentes vistas puedan utilizarse correctamente independientemente del tamaño de pantalla.

## 🧭 SPA y History API

ComicSansCon utiliza una arquitectura Single Page Application.

Las rutas principales son:

- `/home`
- `/chat`
- `/about`

La navegación se realiza mediante la History API, utilizando `pushState` para modificar la URL sin recargar la página.

También se utiliza el evento `popstate` para detectar los movimientos realizados mediante los botones:

- ⬅️ Atrás
- ➡️ Adelante

del navegador.

De esta manera, la aplicación puede renderizar diferentes vistas manteniendo la experiencia de una SPA.

Si el usuario accede a una ruta no existente, se muestra una vista de error 404 / Not Found.

## 🤖 Integración con Gemini AI

La aplicación utiliza Gemini AI para generar las respuestas de Homer Simpson.

El flujo de comunicación es:

Usuario
↓
Interfaz del Chat
↓
POST /api/chat
↓
Vercel Serverless Function
↓
Gemini AI
↓
Respuesta generada
↓
Interfaz del Chat

El frontend no realiza directamente la comunicación con Gemini utilizando la API Key.

En su lugar, envía la información a:

/api/chat

La función Serverless procesa la solicitud y se comunica con Gemini.

## 🎭 System Prompt

Para mantener la personalidad del personaje, se utiliza un System Prompt que define características de Homer Simpson.

El prompt establece aspectos como:

- Personalidad del personaje.
- Forma de expresarse.
- Tono humorístico.
- Respuestas relacionadas con el universo de Los Simpson.
- Comportamiento del personaje durante la conversación.
- Limitaciones para evitar respuestas fuera del rol establecido.

De esta manera, Gemini no funciona únicamente como un chatbot genérico, sino que recibe instrucciones específicas para responder interpretando a Homer Simpson.

## 🧠 Historial de conversación

Cada solicitud al modelo incluye el historial necesario de la conversación para conservar el contexto entre los mensajes.

El flujo conceptual es:

Mensaje del usuario
↓
Historial anterior
↓
Nuevo mensaje
↓
Solicitud a Gemini
↓
Respuesta de Homer
↓
Actualización del historial

Esto permite que las respuestas tengan en cuenta los mensajes anteriores y que la conversación resulte más coherente.

## 🔐 Seguridad

La API Key de Gemini no se encuentra en el código del frontend.

La comunicación con Gemini se realiza mediante una Vercel Serverless Function ubicada en:

api/chat.js

La clave se almacena mediante una variable de entorno:

GEMINI_API_KEY

En desarrollo local se utiliza un archivo `.env`, mientras que en producción la variable se configura desde Vercel.

El archivo `.env` está incluido en `.gitignore` para evitar que la API Key sea publicada accidentalmente en GitHub.

El repositorio incluye un archivo:

.env.example

que sirve como referencia para configurar las variables necesarias sin incluir valores sensibles.

## 💬 Chat y experiencia de usuario

La interfaz del chat diferencia visualmente los mensajes enviados por el usuario de las respuestas de Homer Simpson.

La experiencia incluye:

- 💬 Diferenciación visual entre usuario y personaje.
- ⏳ Indicador de carga mientras se genera una respuesta.
- 📜 Scroll automático hacia los mensajes más recientes.
- 🧠 Conservación del contexto durante la sesión.
- ⚠️ Mensajes de error cuando ocurre un problema de comunicación.
- 📝 Campo para escribir nuevos mensajes.
- 📱 Adaptación del chat a dispositivos móviles, tablets y desktop.

El objetivo es mantener una interacción clara y fluida durante toda la conversación.

## 🗂️ Estructura del proyecto

Proyecto-M3_Matias-Mancini/
│
├── api/
│ └── chat.js
│
├── src/
│ ├── index.html
│ ├── app.js
│ ├── api.js
│ ├── chat.js
│ ├── home.js
│ ├── about.js
│ ├── navigation.js
│ ├── router.js
│ ├── state.js
│ ├── notFound.js
│ ├── styles.css
│ │
│ ├── services/
│ │ └── characters.js
│ │
│ └── transform/
│ └── character.js
│
├── tests/
│ ├── app.test.js
│ └── utils.test.js
│
├── .env.example
├── .gitignore
├── package.json
├── package-lock.json
├── README.md
└── vercel.json

### Principales responsabilidades

| Archivo / Carpeta | Responsabilidad |
|---|---|
| `src/app.js` | Inicialización principal de la aplicación |
| `src/router.js` | Gestión de las rutas de la SPA |
| `src/navigation.js` | Navegación entre las diferentes vistas |
| `src/home.js` | Renderizado de la vista Home |
| `src/chat.js` | Lógica e interfaz del chat |
| `src/about.js` | Renderizado de la vista About |
| `src/notFound.js` | Vista para rutas inexistentes |
| `src/api.js` | Comunicación con el backend |
| `src/state.js` | Estado de la aplicación y conversación |
| `src/styles.css` | Estilos y diseño responsive |
| `src/services/` | Comunicación con servicios externos |
| `src/transform/` | Transformación de datos |
| `api/chat.js` | Vercel Serverless Function para Gemini |
| `tests/` | Tests automatizados con Vitest |
| `vercel.json` | Configuración del deployment y rutas |

## 🔄 Flujo general de la aplicación

 COMICSANSCON
                     │
                     ▼
                ┌─────────┐
                │  Home   │
                └────┬────┘
                     │
          ┌──────────┴──────────┐
          ▼                     ▼
     ┌─────────┐           ┌─────────┐
     │  Chat   │           │  About  │
     └────┬────┘           └─────────┘
          │
          ▼
    Mensaje del usuario
          │
          ▼
     /api/chat
          │
          ▼
  Vercel Serverless
          │
          ▼
      Gemini AI
          │
          ▼
   Respuesta de Homer
          │
          ▼
    Actualización
    del historial
          │
          ▼
      Nuevo mensaje

      ## 🧪 Testing

El proyecto utiliza Vitest para realizar tests unitarios.

Para ejecutar los tests:

```bash
npm test
```

Los tests cubren diferentes comportamientos de la aplicación, incluyendo:

- Funcionamiento de las funciones principales.
- Respuestas HTTP.
- Manejo de errores.
- Errores de red.
- Validación de respuestas.
- Mocking de funciones cuando es necesario.

Los tests se encuentran en:

tests/
├── app.test.js
└── utils.test.js

El objetivo es verificar que las funciones principales continúen funcionando correctamente y detectar errores durante el desarrollo.

## 💻 Instalación y ejecución local

### 1. Clonar el repositorio

Abrir una terminal y ejecutar:

```bash
git clone git@github.com:matiasg2026/Proyecto-M3_Matias-Mancini.git
```

Luego ingresar al proyecto:

```bash
cd Proyecto-M3_Matias-Mancini
```

### 2. Instalar dependencias

Ejecutar:

```bash
npm install
```

### 3. Configurar variables de entorno

Crear un archivo:

.env

Agregar la API Key de Gemini:

GEMINI_API_KEY=tu_api_key

El repositorio incluye:

.env.example

como referencia.

> ⚠️ No subir nunca el archivo `.env` a GitHub.

### 4. Ejecutar el proyecto

Para ejecutar el proyecto localmente:

```bash
npm run dev
```

La aplicación se ejecutará mediante Vercel y podrá accederse desde la URL local indicada por la consola.

## 🚀 Deployment en Vercel

El proyecto está desplegado en Vercel.

Aplicación:

👉 [https://proyecto-integrador-matias.vercel.app](https://proyecto-integrador-matias.vercel.app)

La configuración de Vercel permite que las rutas de la SPA funcionen correctamente:

- `/home`
- `/chat`
- `/about`

La variable:

GEMINI_API_KEY


se configura como variable de entorno en el proyecto de Vercel.

De esta manera, la clave no se incluye dentro del código público del repositorio.

## 📸 Capturas de pantalla

### 🏠 Página principal

<!-- MANTENER AQUÍ LA RUTA DE TU CAPTURA ACTUAL -->

### 💬 Chat con Homer Simpson

<!-- MANTENER AQUÍ LA RUTA DE TU CAPTURA ACTUAL -->

### ℹ️ Página About

<!-- MANTENER AQUÍ LA RUTA DE TU CAPTURA ACTUAL -->

## 🤖 Uso de Inteligencia Artificial durante el desarrollo

Durante el desarrollo del proyecto se utilizó inteligencia artificial como herramienta de asistencia.

La IA fue utilizada principalmente para:

- Analizar y comprender los requerimientos de la consigna.
- Consultar conceptos relacionados con JavaScript y SPA.
- Revisar y mejorar la estructura del código.
- Detectar y solucionar errores durante el desarrollo.
- Analizar problemas relacionados con Vercel y Serverless Functions.
- Mejorar la interfaz y la experiencia de usuario.
- Revisar la integración con Gemini AI.
- Mejorar la documentación del proyecto.

La implementación final, las pruebas y las decisiones tomadas sobre la estructura del proyecto fueron revisadas y realizadas durante el proceso de desarrollo.

## 📚 Aprendizajes

Durante el desarrollo de este proyecto se trabajaron principalmente los siguientes conceptos:

- Desarrollo de aplicaciones SPA.
- History API.
- `pushState` y `popstate`.
- JavaScript modular.
- Programación asíncrona con `async/await`.
- Fetch API.
- Manejo de errores.
- Integración con APIs de inteligencia artificial.
- Diseño de System Prompts.
- Manejo de historial conversacional.
- Variables de entorno.
- Vercel Serverless Functions.
- Diseño Responsive y Mobile-First.
- Testing con Vitest.
- Git y GitHub.
- Deployment en Vercel.

## 📸 Capturas de pantalla

### Página principal

![Página principal](./Img/Imagen01.png)

### Chat con Homero Simpson

![Chat con Homero Simpson](./Img/Imagen02.png)

### Página About

![Página About](./Img/Imagen03.png)

## 🤖 Registro del uso de AI

Durante el desarrollo del proyecto se utilizó inteligencia artificial como herramienta de asistencia para:

Analizar y comprender los requisitos de la consigna.
Resolver dudas relacionadas con JavaScript, SPA y Vercel.
Revisar y depurar errores durante el desarrollo.
Comprender la integración de Gemini mediante una función serverless.
Diseñar y revisar los tests realizados con Vitest.
Mejorar la documentación del proyecto.

La implementación, las pruebas y las decisiones finales del proyecto fueron realizadas y verificadas durante el desarrollo.

![Uso de AI - Captura 04](./Img/Imagen04.png)

![Uso de AI - Captura 05](./Img/Imagen05.png)

![Uso de AI - Captura 06](./Img/Imagen06.png)

![Uso de AI - Captura 07](./Img/Imagen07.png)

![Uso de AI - Captura 08](./Img/Imagen08.png)

![Uso de AI - Captura 09](./Img/Imagen09.png)

![Uso de AI - Captura 10](./Img/Imagen10.png)

![Uso de AI - Captura 11](./Img/Imagen11.png)

![Uso de AI - Captura 12](./Img/Imagen12.png)

![Uso de AI - Captura 13](./Img/Imagen13.png)

![Uso de AI - Captura 14](./Img/Imagen14.png)

![Uso de AI - Captura 15](./Img/Imagen15.png)

![Uso de AI - Captura 16](./Img/Imagen16.png)

![Uso de AI - Captura 17](./Img/Imagen17.png)

![Uso de AI - Captura 18](./Img/Imagen18.png)

![Uso de AI - Captura 19](./Img/Imagen19.png)

![Uso de AI - Captura 20](./Img/Imagen20.png)

![Uso de AI - Captura 21](./Img/Imagen21.png)

![Uso de AI - Captura 22](./Img/Imagen22.png)

![Uso de AI - Captura 23](./Img/Imagen23.png)

![Uso de AI - Captura 24](./Img/Imagen24.png)

![Uso de AI - Captura 25](./Img/imagen25.png)


## 📦 Repositorio

https://github.com/matiasg2026/Proyecto-M3_Matias-Mancini

## 👨‍💻 Autor

**Matías Mancini**

Proyecto Integrador — Henry

## 📄 Licencia

Proyecto realizado con fines educativos como parte de la formación de desarrollo web.