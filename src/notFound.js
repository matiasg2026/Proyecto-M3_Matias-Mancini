export function renderNotFound() {
  const app = document.querySelector("#app");

  app.innerHTML = `
    <section class="not-found">
      <h1>404</h1>
      <h2>Página no encontrada</h2>
      <p>La ruta que buscás no existe.</p>
      <a href="/">Volver al inicio</a>
    </section>
  `;
}