export function renderHome() {
  const app = document.querySelector("#app");

  app.innerHTML = `
    <section class="home">

      <img
        src="https://cdn.thesimpsonsapi.com/500/character/1.webp"
        alt="Homero Simpson"
      >

      <h1>Homero Simpson</h1>

      <h2>¡Conversá con Homero!</h2>

      <p>
        Homero Simpson es el padre de la familia Simpson.
        Trabaja como inspector de seguridad en la planta nuclear
        de Springfield y es conocido por su personalidad
        divertida, impulsiva y algo despistada.
      </p>

      <a href="/chat">
        Comenzar a chatear
      </a>

    </section>
  `;
}