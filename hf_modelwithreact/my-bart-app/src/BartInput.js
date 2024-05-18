// BartInput.js

import React, { useState } from 'react';
import axios from 'axios';

const BartInput = () => {
  const [prompt, setPrompt] = useState('');
  const [feedback, setFeedback] = useState('');
  const [loading, setLoading] = useState(false);

  const handlePromptChange = (e) => {
    setPrompt(e.target.value);
  };

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const response = await axios.post('/generate-feedback', { prompt });
      setFeedback(response.data.feedback);
    } catch (error) {
      console.error('Error generating feedback:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bart-input">
      <textarea
        value={prompt}
        onChange={handlePromptChange}
        placeholder="Enter your prompt here..."
        rows={5}
      />
      <button type="button" onClick={handleSubmit} disabled={loading}>
        {loading ? 'Generating...' : 'Submit for Feedback'}
      </button>
      {feedback && (
        <div>
          <h2>Generated Feedback</h2>
          <p>{feedback}</p>
        </div>
      )}
    </div>
  );
};

export default BartInput;
