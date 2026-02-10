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
      sx={{
        p: 3,
        maxWidth: 400,
        margin: 'auto',
        bgcolor: '#f5f5f5',
        borderRadius: 2,
        boxShadow: 3,
      }}
    >
      <h2>Fruits in basket: {fruitsInBasket.length}</h2>
      <Button
        variant="contained"
        disabled={fruitsInBasket.length >= FRUITS.length}
        onClick={handleAddFruit}
      >
        Add fruit to basket
      </Button>
      <List sx={{ mt: 2 }}>
        <TransitionGroup>
          {fruitsInBasket.map((item) => (
            <Collapse key={item}>
              <FruitItem item={item} handleRemoveFruit={handleRemoveFruit} />
            </Collapse>
          ))}
        </TransitionGroup>
      </List>
    </Box>
  );
}
