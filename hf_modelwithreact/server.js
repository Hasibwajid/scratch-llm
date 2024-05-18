const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');

const app = express();
const port = 5000;

// Middleware
app.use(bodyParser.json());

// OpenAI API configuration
const openaiApiKey = 'YOUR_OPENAI_API_KEY';
const engine = 'text-davinci-003'; // GPT-3.5 Turbo

// Endpoint to generate feedback
app.post('/generate-feedback', async (req, res) => {
  const { prompt } = req.body;

  try {
    const response = await axios.post(
      'https://api.openai.com/v1/engines/' + engine + '/completions',
      {
        prompt,
        max_tokens: 150,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${openaiApiKey}`,
        },
      }
    );
    const feedback = response.data.choices[0].text.trim();
    res.json({ feedback });
  } catch (error) {
    console.error('Error generating feedback:', error.message);
    res.status(500).json({ error: 'An error occurred while generating feedback' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
