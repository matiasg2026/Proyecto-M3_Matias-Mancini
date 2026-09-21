function debounce(fn, delay) {
  let timer;

  return (...args) => {
    clearTimeout(timer);

    timer = setTimeout(() => {
      fn(...args);
    }, delay);
  };
}

function wait(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

export function renderChat() {
  const app = document.querySelector("#app");
  const history = [];
  let isLoading = false; 

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
  const button = form.querySelector("button");

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (isLoading) return;
    const text = input.value.trim();

    if (!text) return;

    isLoading = true;
    button.disabled = true;

     console.log("Submit ejecutado");


      history.push({
        role: "user",
        parts: [
     {
        text,
     },
   ],
  });

  

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
  const sendMessage = () => {
    return fetch("/api/chat", {
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
  };

  let response = await sendMessage();
  let data = await response.json();

  if (!response.ok) {
    const error = new Error(
      data.error?.message ||
      data.error ||
      "Error al comunicarse con el servidor"
    );

    error.status = response.status;

    const retryAfter = response.headers.get("Retry-After");

    if (retryAfter) {
      error.retryAfterSeconds = Number(retryAfter);
    }

    if (response.status === 429) {
      error.isRateLimit = true;
    }

    if (error.isRateLimit) {
  let seconds = error.retryAfterSeconds || 5;

  while (seconds > 0) {
    characterMessage.textContent =
      `Esperando para reintentar (${seconds} segundos)...`;

    await wait(1000);

    seconds--;
  }

  characterMessage.textContent =
    "Reintentando...";

  response = await sendMessage();
      data = await response.json();

    if (!response.ok) {
  throw new Error(
    data.error?.message ||
    data.error ||
    "No se pudo completar el reintento."
  );
}
    } else {
      throw error;
    }
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
    } finally {
      isLoading = false;
      button.disabled = false;
    }
  }; 
 
  form.addEventListener("submit", handleSubmit);
}