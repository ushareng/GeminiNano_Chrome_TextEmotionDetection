import './App.css';
import React, { useState } from 'react';


async function doPrompt(prompt) {
  const session = await window.ai.createTextSession();
  const result = await session.prompt(`Detect emotion of the sentence - ${prompt}. Answer in one word only`);
  
  console.log(result);
  return result;
}

function App() {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await doPrompt(input);
    setResponse(result);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Text Emotion Detection with Gemini Nano</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter your text"
          />
          <button type="submit">Detect</button>
        </form>
        {response && (
          <div>
            <h2>Emotion:</h2>
            <p>{response}</p>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;

