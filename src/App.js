import React from 'react';
import './App.scss';
import Dropdown from './Dropdown';

const items = [
  {
    id: 1,
    value: 'Pulp Fiction',
  },
  {
    id: 2,
    value: 'The Prestige',
  },
  {
    id: 3,
    value: 'Blade Runner 2049',
  },
];

function App() {
  return (
    <div className="container">
      <h1 style={{ textAlign: 'center' }}>
        Buy Movies{' '}
        <span role="img" aria-label="Movie projector">
          🎥
        </span>
      </h1>
      <Dropdown title="Select movie" items={items} multiSelect />
    </div>
  );
}

export default App;
