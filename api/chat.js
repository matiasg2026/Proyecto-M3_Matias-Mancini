export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      error: "Método no permitido",
    });
  }

  const { message } = req.body;

  if (!message) {
    return res.status(400).json({
      error: "El mensaje es obligatorio",
    });
  }

  return res.status(200).json({
    response: `¡D'oh! Recibí tu mensaje: "${message}"`,
  });
}