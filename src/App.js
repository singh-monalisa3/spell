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
  const [suggestion, setSuggestion] = useState('');

  // Function to handle input changes and check for spelling errors
  const handleInputChange = (event) => {
    const text = event.target.value;
    setInputText(text);

    // Reset suggestion if input is empty
    if (text.trim() === '') {
      setSuggestion('');
      return;
    }

    // Split the text into words and find the first incorrect word
    const words = text.split(/\s+/);
    const firstIncorrectWord = words.find(
      (word) => customDictionary[word.toLowerCase()]
    );

    // If a misspelled word is found, set the suggestion
    if (firstIncorrectWord) {
      setSuggestion(
        `Did you mean: ${customDictionary[firstIncorrectWord.toLowerCase()]}?`
      );
    } else {
      setSuggestion('');
    }
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
        {suggestion && <p><strong>{suggestion}</strong></p>}
      </div>
    </div>
  );
};

export default XSpellCheck;
