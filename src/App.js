import React, { useState } from 'react';
import './App.css';
import LOGO from './logo/logo.png'; // Corrected import statement

function App() {
  const [items, setItems] = useState([]); // State to store the list of items
  const [newItem, setNewItem] = useState(''); // State to store the text input from the user

  // Function to handle the addition of a new item
  const addItem = () => {
    if (newItem.trim() === '') {
      return; // Do nothing if the input field is empty
    }

    setItems([...items, newItem]); // Add the new item to the list
    setNewItem(''); // Clear the input field
  };

  // Function to handle input changes
  const handleInputChange = (e) => {
    setNewItem(e.target.value);
  };

  return (
    <div className="App">
      <div className='header'>
        {/* Correct usage of <img> tag to display logo */}
        
        <h1 className='head1'><img className='imglogo' src={LOGO} alt="Logo" />- Item List Manager</h1>
      </div>
      <input 
        type="text" 
        value={newItem} 
        onChange={handleInputChange} 
        placeholder="Enter item" 
      />
      <button onClick={addItem}>Add Item</button>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li> // Display each item in the list
        ))}
      </ul>
    </div>
  );
}

export default App;
