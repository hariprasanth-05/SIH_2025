// backend/server.js
const express = require('express');
const { GoogleGenerativeAI } = require('@google/generative-ai');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

const app = express();
const port = 3001; // We'll run the backend on a different port

app.use(cors()); // Allow requests from your React app
app.use(express.json());

// Initialize the Google Generative AI client
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// Define the endpoint for chat
app.post('/chat', async (req, res) => {
  try {
    const { message } = req.body;

    if (!message) {
      return res.status(400).send({ error: 'Message is required' });
    }

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});

    // This is the "prompt engineering" part. We give the AI its personality.
    const chat = model.startChat({
      history: [
        {
          role: "user",
          parts: [{ text: "You are 'Pashurakshak', a helpful and expert AI assistant for Indian farmers. Your expertise is in agriculture, biosecurity, livestock (cattle, poultry, pigs), and crops relevant to India. Provide concise, practical, and easy-to-understand advice. Always be supportive and encouraging." }],
        },
        {
          role: "model",
          parts: [{ text: "Namaste! I am Pashurakshak, your dedicated farming assistant. How can I help you and your farm today?" }],
        },
      ],
      generationConfig: {
        maxOutputTokens: 200,
      },
    });

    const result = await chat.sendMessage(message);
    const response = await result.response;
    const text = response.text();

    res.send({ response: text });

  } catch (error) {
    console.error("Error in /chat endpoint:", error);
    res.status(500).send({ error: 'Failed to get response from AI' });
  }
});

app.listen(port, () => {
  console.log(`Backend server listening at http://localhost:${port}`);
});