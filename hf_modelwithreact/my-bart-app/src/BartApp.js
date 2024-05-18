// import React, { useState } from 'react';
// import axios from 'axios';

// const API_ENDPOINT = 'https://api.openai.com/v1/engines/davinci/completions';
// const API_KEY = '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';

// const App = () => {
//   const [prompt, setPrompt] = useState('');
//   const [response, setResponse] = useState('');
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const fetchFeedback = async () => {
//     setIsLoading(true);
//     setError(null);

//     try {
//       const headers = {
//         'Content-Type': 'application/json',
//         'Authorization': `Bearer ${API_KEY}`,
//       };

//       const { data } = await axios.post(API_ENDPOINT, {
//         prompt: prompt,
//         max_tokens: 100,
//       }, { headers });

//       console.log('Response:', data.choices[0].text.trim());

//       setResponse(data.choices[0].text.trim());
//     } catch (error) {
//       setError(error);
//       console.error('Error fetching feedback:', error.message);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handlePromptChange = (event) => {
//     setPrompt(event.target.value);
//   };

//   const handleSubmit = async () => {
//     if (!prompt.trim()) {
//       setError(new Error('Please provide a valid prompt.'));
//       return;
//     }
//     await fetchFeedback();
//   };

//   return (
//     <div className="app">
//       <h1>GPT-3 Feedback App</h1>
//       <textarea
//         value={prompt}
//         onChange={handlePromptChange}
//         placeholder="Enter your prompt here..."
//         rows={5}
//       />
//       <button onClick={handleSubmit} disabled={isLoading}>
//         {isLoading ? 'Loading...' : 'Submit for Feedback'}
//       </button>
//       {error && <p>Error: {error.message}</p>}
//       {response && <p>Response: {response}</p>}
//     </div>
//   );
// };

// export default App;
