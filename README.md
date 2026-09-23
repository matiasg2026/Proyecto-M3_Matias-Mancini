# 🎭 ComicSansCon

Aplicación web desarrollada como Proyecto Integrador 3 de Henry.

ComicSansCon es una **Single Page Application (SPA)** que permite interactuar mediante un chat con un personaje ficticio. En este proyecto el personaje elegido es **Homer Simpson**.

La aplicación utiliza **Gemini AI** para generar las respuestas del personaje y una **Vercel Function** para mantener la API Key protegida.

---

## 🎭 Personaje elegido: Homero Simpson

El personaje seleccionado para la aplicación es **Homero Simpson**, de la serie *The Simpsons*.

La aplicación presenta:

- 👤 Perfil del personaje.
- 💬 Chat interactivo.
- 🤖 Respuestas generadas mediante Gemini AI.
- 🎨 Interfaz adaptada a la temática de *The Simpsons*.
- 📱 Diseño responsive y mobile-first.
- 🧭 Navegación SPA sin recargar la página.

---

## 🔗 Enlaces del proyecto

- 💻 **GitHub:**  
  [https://github.com/matiasg2026/Proyecto-M3_Matias-Mancini](https://github.com/matiasg2026/Proyecto-M3_Matias-Mancini)

- 🌐 **Aplicación desplegada en Vercel:**  
  [https://proyecto-integrador-matias.vercel.app](https://proyecto-integrador-matias.vercel.app)

- 🖥️ **Aplicación local:**  
  [http://localhost:3000](http://localhost:3000)

---

## 🛠️ Tecnologías utilizadas

- HTML5
- CSS3
- JavaScript
- Vite
- Vitest
- Node.js
- Vercel
- Vercel Functions
- Gemini AI
- The Simpsons API
- Git
- GitHub

---

# 🚀 Ejecutar el proyecto localmente

## 1. Clonar el repositorio

Abrir una terminal y ejecutar:

[https://github.com/matiasg2026/Proyecto-M3_Matias-Mancini](https://github.com/matiasg2026/Proyecto-M3_Matias-Mancini)



2. Instalar las dependencias
npm install

3. Crear el archivo .env

En la raíz del proyecto se debe crear un archivo llamado:

.env

Dentro del archivo colocar:

GEMINI_API_KEY=tu_api_key

⚠️ Importante: la API Key es privada y no debe subirse a GitHub.

El proyecto utiliza variables de entorno para evitar incluir la clave directamente en el código fuente.

## 🔑 Obtener una API Key de Gemini

Para obtener una API Key se debe ingresar a:

Google AI Studio

## Luego:

- Iniciar sesión con una cuenta de Google.
- Ingresar a la sección **API Keys**.
- Seleccionar **Create API key**.
- Seguir los pasos indicados.
- Copiar la API Key generada.
- Colocarla en el archivo `.env`.

Ejemplo:

GEMINI_API_KEY=tu_api_key

La API Key no debe compartirse públicamente ni subirse al repositorio.

## ▶️ Ejecutar la aplicación

El proyecto utiliza Vercel Dev para ejecutar localmente tanto la aplicación como la función serverless.

Ejecutar:

npm run dev

La aplicación estará disponible en:

http://localhost:3000

También puede ejecutarse directamente mediante:

vercel dev


## 🧪 Ejecutar los tests

Para ejecutar las pruebas automatizadas:

npm test

El proyecto cuenta con 4 tests realizados con Vitest.

### Las pruebas verifican:

✅ Respuesta correcta de fetchJson.
✅ Manejo de errores HTTP.
✅ Manejo de errores de red.
✅ Manejo de respuestas vacías.

Los tests utilizan mocks para evitar realizar llamadas reales a APIs externas durante las pruebas.

## ☁️ Desplegar en Vercel

El proyecto utiliza Vercel para alojar la aplicación y ejecutar la función serverless:

/api/chat

1. Instalar Vercel CLI

Si todavía no está instalada:

npm install -g vercel

Comprobar la instalación:

vercel --version

2. Iniciar sesión

Ejecutar:

vercel login

Seguir las instrucciones mostradas en la terminal para completar el inicio de sesión.

3. Ejecutar localmente con Vercel

Para iniciar el entorno local:

vercel dev

También puede utilizarse:

npm run dev

La aplicación estará disponible en:

http://localhost:3000

## 🔐 Configurar GEMINI_API_KEY en Vercel

Para que la aplicación desplegada pueda comunicarse con Gemini, es necesario configurar la variable de entorno en Vercel.

### Configuración 

1. Ingresar al proyecto en Vercel.
2. Abrir Settings.
3. Seleccionar Environment Variables.
4. Crear una nueva variable.
5. En `Name` colocar:

GEMINI_API_KEY

6. En Value colocar la API Key de Gemini.
7. Seleccionar los entornos correspondientes:
`Production`
`Preview`
`Guardar la configuración.`

La API Key es utilizada desde la función serverless y no se incluye directamente en el código JavaScript del cliente.

## 🚀 Realizar un despliegue

Para realizar un despliegue de prueba:

vercel

Para realizar un despliegue de producción:

vercel --prod

Después del despliegue, Vercel proporcionará la URL correspondiente a la aplicación

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