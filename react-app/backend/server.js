// backend/server.js
const express = require('express');
const { GoogleGenerativeAI } = require('@google/generative-ai');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// A simple map to convert language codes to full names for the AI prompt
const languageMap = {
  en: 'English',
  hi: 'Hindi',
  mr: 'Marathi',
  or: 'Odia',
  ta: 'Tamil',
  te: 'Telugu',
  kn: 'Kannada',
  ml: 'Malayalam',
};

app.post('/chat', async (req, res) => {
  try {
    // Now we receive the message AND the language
    const { message, language } = req.body;
    const languageName = languageMap[language] || 'English'; // Default to English if language is unknown

    if (!message) {
      return res.status(400).send({ error: 'Message is required' });
    }

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});

    // We updated the prompt to be language-aware
    const chat = model.startChat({
      history: [
        {
          role: "user",
          parts: [{ text: `You are 'Pashurakshak', an expert AI assistant for Indian farmers. Your expertise is in agriculture, biosecurity, livestock (cattle, poultry, pigs), and crops relevant to India. You MUST respond ONLY in the ${languageName} language. Provide concise, practical, and easy-to-understand advice.` }],
        },
        {
          role: "model",
          parts: [{ text: "Acknowledged. I will now exclusively respond in " + languageName }],
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