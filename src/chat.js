export function renderChat() {
  const app = document.querySelector("#app");
  const history = [];

  app.innerHTML = `
    <section class="chat-mf">

      <header class="chat-mf__header">
        <img src="https://cdn.thesimpsonsapi.com/500/character/1.webp" 
        alt="Homero Simpson">
        <div>
          <h1>ComicSansCon</h1>
          <p>Chat con Homer Simpson</p>
        </div>
      </header>

      <section class="chat-mf__messages">
        <p>¡Hola! Soy Homero Simpson.</p>
      </section>

      <form class="chat-mf__form">

        <input
          type="text"
          placeholder="Escribí tu mensaje..."
        >

        <button type="submit">
          Enviar
        </button>

      </form>

    </section>
  `;

  const form = document.querySelector(".chat-mf__form");
  const input = form.querySelector("input");
  const messages = document.querySelector(".chat-mf__messages");

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const text = input.value.trim();

      history.push({
        role: "user",
        parts: [
     {
        text,
     },
   ],
  });

    if (!text) return;

    const message = document.createElement("p");
    message.classList.add("chat-message", "chat-message--user");
    message.textContent = text;

    messages.appendChild(message);

    input.value = "";

    const characterMessage = document.createElement("p");
    characterMessage.classList.add(
      "chat-message",
      "chat-message--character"
    );

    characterMessage.textContent = "Escribiendo...";

    messages.appendChild(characterMessage);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
         body: JSON.stringify({
        payload: {
          message: text,
          history 
         },
         model: "gemini-3.5-flash-lite"
       })
      });

      const data = await response.json();
      

      if (!response.ok) {
        throw new Error(
          data.error || "Error al comunicarse con el servidor"
        );
      }

     const answerText =
       data.candidates[0].content.parts[0].text;

     characterMessage.textContent = answerText;

     history.push({
       role: "model",
       parts: [
    {
       text: answerText,
    },
  ],
  });
    } catch (error) {
      characterMessage.textContent =
        "No pude responder en este momento. Intentá nuevamente.";

      console.error(error);
    }
  });
}