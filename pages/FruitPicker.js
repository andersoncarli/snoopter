// import { useState } from 'react';

export default function FruitPicker() {
  const [fruits, setFruits] = useState([
    'Orange',
    'Banana',
    'Apple',
  ]);

  const removeElement = (index) => {
    const newFruits = fruits.filter((_, i) => i !== index);
    setFruits(newFruits);
  };

  return (
    <div>
      {fruits.map((fruit, index) => (
        <div key={index} style={{ display: 'flex' }}>
          <button onClick={() => removeElement(index)}>
            {fruit}
          </button>
        </div>
      ))}
    </div>
  );
}