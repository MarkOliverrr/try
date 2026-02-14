import React, { useState } from 'react';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Collapse from '@mui/material/Collapse';
import { TransitionGroup } from 'react-transition-group';
import Box from '@mui/material/Box';
import FruitItem from './FruitItem';

const FRUITS = [
  '🍏 Apple',
  '🍌 Banana',
  '🍍 Pineapple',
  '🥥 Coconut',
  '🍉 Watermelon',
];

export default function FruitBasket() {
  const [fruitsInBasket, setFruitsInBasket] = useState(FRUITS.slice(0, 3));

  const handleAddFruit = () => {
    const nextHiddenItem = FRUITS.find((i) => !fruitsInBasket.includes(i));
    if (nextHiddenItem) {
      setFruitsInBasket((prev) => [nextHiddenItem, ...prev]);
    }
  };

  const handleRemoveFruit = (item) => {
    setFruitsInBasket((prev) => prev.filter((i) => i !== item));
  };

  return (
    <Box
      className="card"
      sx={{
        p: 4,
        maxWidth: 450,
        width: '100%',
        margin: 'auto',
        background: 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(10px)',
        borderRadius: 4,
        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
        border: '1px solid rgba(255, 255, 255, 0.2)',
      }}
    >
      <Box sx={{ textAlign: 'center', mb: 3 }}>
        <h2 style={{ 
          fontSize: '1.8rem', 
          fontWeight: 600, 
          color: '#333',
          marginBottom: '0.5rem'
        }}>
          🧺 Fruits in basket: {fruitsInBasket.length}
        </h2>
        <p style={{ 
          color: '#666', 
          fontSize: '0.9rem',
          marginBottom: '1.5rem'
        }}>
          {fruitsInBasket.length === 0 
            ? 'Your basket is empty! Add some fruits.'
            : `${fruitsInBasket.length} of ${FRUITS.length} fruits collected`
          }
        </p>
      </Box>
      
      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
        <Button
          variant="contained"
          disabled={fruitsInBasket.length >= FRUITS.length}
          onClick={handleAddFruit}
          sx={{
            background: 'linear-gradient(135deg, #667eea, #764ba2)',
            color: 'white',
            padding: '12px 24px',
            fontSize: '1rem',
            fontWeight: 600,
            borderRadius: '25px',
            textTransform: 'none',
            boxShadow: '0 4px 15px rgba(102, 126, 234, 0.4)',
            '&:hover': {
              background: 'linear-gradient(135deg, #5a6fd8, #6a4190)',
              boxShadow: '0 6px 20px rgba(102, 126, 234, 0.6)',
              transform: 'translateY(-2px)'
            },
            '&:disabled': {
              background: '#ccc',
              color: '#666',
              boxShadow: 'none'
            }
          }}
        >
          {fruitsInBasket.length >= FRUITS.length 
            ? '🎉 All fruits collected!' 
            : '🍎 Add fruit to basket'
          }
        </Button>
      </Box>
      
      <List sx={{ mt: 2 }}>
        <TransitionGroup>
          {fruitsInBasket.map((item) => (
            <Collapse key={item}>
              <FruitItem item={item} handleRemoveFruit={handleRemoveFruit} />
            </Collapse>
          ))}
        </TransitionGroup>
      </List>
      
      {fruitsInBasket.length === 0 && (
        <Box sx={{ 
          textAlign: 'center', 
          py: 4, 
          color: '#999',
          fontStyle: 'italic'
        }}>
          No fruits yet. Click the button above to add some!
        </Box>
      )}
    </Box>
  );
}
