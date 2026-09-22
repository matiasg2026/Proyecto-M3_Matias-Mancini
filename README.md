ComicSansCon

Aplicación web Single Page Application (SPA) desarrollada como Proyecto Integrador 3 de Henry.

ComicSansCon permite conversar con Homer Simpson utilizando inteligencia artificial mediante Gemini y una función serverless de Vercel.

🎭 Personaje elegido: Homer Simpson

El personaje elegido para la aplicación es Homer Simpson, protagonista de la serie animada Los Simpson.

La aplicación utiliza la imagen del personaje obtenida desde The Simpsons API y Gemini para generar respuestas configuradas con la personalidad característica de Homer Simpson: divertida, ingenua y con humor.

🔗 Enlaces del proyecto

GitHub: https://github.com/matiasg2026/Proyecto-M3_Matias-Mancini
Vercel: https://proyecto-integrador-matias.vercel.app
Local: http://localhost:3000


🚀 Ejecutar el proyecto localmente

1. Clonar el repositorio
git clone git@github.com:matiasg2026/Proyecto-M3_Matias-Mancini.git
cd Proyecto-M3_Matias-Mancini
2. Instalar las dependencias
npm install
3. Crear y configurar el archivo .env

En la raíz del proyecto se debe crear un archivo llamado:

.env

Dentro del archivo colocar:

GEMINI_API_KEY=tu_api_key
🔑 ¿Cómo obtener la API Key de Gemini?

Para generar una API Key se debe ingresar a Google AI Studio:

https://aistudio.google.com/

Una vez dentro:

Iniciar sesión con una cuenta de Google.
Ingresar a la sección API Keys.
Seleccionar Create API key.
Seguir los pasos indicados para crear la clave.
Copiar la API Key generada.
Colocarla en el archivo .env como GEMINI_API_KEY.

La API Key debe mantenerse privada y no debe subirse a GitHub. El proyecto utiliza variables de entorno para mantenerla fuera del código fuente.

4. Ejecutar la aplicación

El proyecto utiliza Vercel Dev para ejecutar localmente la aplicación y su función serverless:

npm run dev

Luego ingresar en:

http://localhost:3000

🧪 Ejecutar los tests

Para ejecutar las pruebas:

npm test

El proyecto cuenta con 4 tests realizados con Vitest:

Respuesta correcta de fetchJson.
Manejo de errores HTTP.
Manejo de errores de red.
Manejo de respuestas vacías.

Los tests utilizan mocks para evitar llamadas reales a la API durante las pruebas.

☁️ Desplegar en Vercel

Para desplegar el proyecto:

vercel

Para realizar un despliegue de producción:

vercel --prod

En Vercel también se debe configurar la variable de entorno:

GEMINI_API_KEY

📸 Capturas de pantalla

Página principal

./Img/Imagen01.png


Chat con Homer Simpson


./Img/Imagen02.png

Página About

./Img/Imagen03.png


🤖 Registro del uso de AI

Durante el desarrollo del proyecto se utilizó inteligencia artificial como herramienta de asistencia para:

Analizar y comprender los requisitos de la consigna.
Resolver dudas relacionadas con JavaScript, SPA y Vercel.
Revisar y depurar errores durante el desarrollo.
Comprender la integración de Gemini mediante una función serverless.
Diseñar y revisar los tests realizados con Vitest.
Mejorar la documentación del proyecto.

La implementación, las pruebas y las decisiones finales del proyecto fueron realizadas y verificadas durante el desarrollo.

./Img/Imagen04.png
./Img/Imagen05.png
./Img/Imagen06.png
./Img/Imagen07.png
./Img/Imagen08.png
./Img/Imagen09.png
./Img/Imagen10.png
./Img/Imagen11.png
./Img/Imagen12.png
./Img/Imagen13.png
./Img/Imagen14.png
./Img/Imagen15.png
./Img/Imagen16.png
./Img/Imagen17.png
./Img/Imagen18.png
./Img/Imagen19.png
./Img/Imagen20.png
./Img/Imagen21.png
./Img/Imagen22.png
./Img/Imagen23.png
./Img/Imagen24.png
./Img/Imagen25.png

📦 Repositorio

https://github.com/matiasg2026/Proyecto-M3_Matias-Mancini.git