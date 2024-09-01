import React, { useState } from 'react';

// Custom dictionary for spell-checking
const customDictionary = {
  teh: 'the',
  wrok: 'work',
  fot: 'for',
  exampl: 'example'
};

const XSpellCheck = () => {
  const [inputText, setInputText] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  // Function to handle input changes and check for spelling errors
  const handleInputChange = (event) => {
    const text = event.target.value;
    setInputText(text);

    // Reset suggestions if input is empty
    if (text.trim() === '') {
      setSuggestions([]);
      return;
    }

    // Split the text into words and find incorrect words
    const words = text.split(/\s+/);
    const incorrectWords = words
      .filter((word) => customDictionary[word.toLowerCase()])
      .map((word) => ({
        incorrect: word,
        correct: customDictionary[word.toLowerCase()]
      }));

    // Set suggestions for all found misspelled words
    setSuggestions(incorrectWords);
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h2 style={{ fontWeight: 'bold' }}>Spell Check and Auto-Correction</h2>
      <textarea
        value={inputText}
        onChange={handleInputChange}
        rows="4"
        cols="50"
        placeholder="Enter text here..."
        style={{ width: '100%', padding: '10px', fontSize: '16px' }}
      />
      <div style={{ marginTop: '10px', color: '#333' }}>
        {suggestions.length > 0 ? (
          suggestions.map((suggestion, index) => (
            <p key={index}>
              Did you mean: <strong>{suggestion.correct}</strong>?
            </p>
          ))
        ) : (
          ''
        )}
      </div>
    </div>
  );
};

export default XSpellCheck;
