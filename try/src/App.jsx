import React from 'react';
import FruitBasket from './components/FruitBasket';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1 className="app-title">🍎 Fruit Basket Manager</h1>
        <p className="app-subtitle">Organize and manage your favorite fruits</p>
      </header>
      <main className="app-main">
        <FruitBasket />
      </main>
    </div>
  );
}

export default App;
