export function renderAbout() {
  const app = document.querySelector("#app");

  app.innerHTML = `
    <section class="about">

      <h1>Sobre ComicSansCon</h1>

      <p>
        ComicSansCon es una aplicación web que permite conversar
        con personajes ficticios utilizando inteligencia artificial.
      </p>

      <p>
        El proyecto utiliza una API externa para obtener información
        del personaje y Gemini para generar respuestas manteniendo
        su personalidad.
      </p>

      <h2>Personaje elegido</h2>

      <img
        src="https://cdn.thesimpsonsapi.com/500/character/1.webp"
        alt="Homero Simpson"
      >

      <h3>Homero Simpson</h3>

      <p>
        Homero Simpson es uno de los personajes principales de
        Los Simpson. Es el padre de la familia Simpson y trabaja
        como inspector de seguridad en la planta nuclear de Springfield.
      </p>

      <a href="/chat">
        Ir al chat
      </a>

    </section>
  `;
}