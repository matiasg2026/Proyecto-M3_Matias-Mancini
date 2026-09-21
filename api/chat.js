export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      error: "Método no permitido",
    });
  }

  const { payload, model } = req.body;

  const history = payload.history || [];

  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey) {
    return res.status(500).json({
      error: {
        message: "API key no configurada en el servidor.",
      },
    });
  }

  try {
    const userTurn = {
      role: "user",
      parts: [
        {
          text: payload.message,
        },
      ],
    };

    const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;

    const geminiResponse = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        systemInstruction: {
          parts: [
            {
              text: "Responde como Homero Simpson. Habla de forma divertida, ingenua y con humor. Sé breve y conciso, pero completa siempre la idea antes de terminar.",
            },
          ],
        },
        contents: [...history, userTurn],
        generationConfig: {
          temperature: 0.7,
          maxOutputTokens: 300,
        },
      }),
    });

    const data = await geminiResponse.json();

    console.log(
      "Tokens generados:",
      data.usageMetadata?.candidatesTokenCount
    );

    if (geminiResponse.status === 429) {
      const retryAfter = geminiResponse.headers.get("Retry-After");

      if (retryAfter) {
        res.setHeader("Retry-After", retryAfter);
      }
    }

    return res.status(geminiResponse.status).json(data);
  } catch (error) {
    return res.status(500).json({
      error: {
        message: error.message || "Error interno del servidor.",
      },
    });
  }
}