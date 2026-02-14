import React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Box from '@mui/material/Box';

export default function FruitItem({ item, handleRemoveFruit }) {
  return (
    <ListItem
      sx={{
        background: 'rgba(255, 255, 255, 0.8)',
        backdropFilter: 'blur(5px)',
        marginBottom: 1,
        borderRadius: 2,
        border: '1px solid rgba(255, 255, 255, 0.3)',
        transition: 'all 0.3s ease',
        '&:hover': {
          background: 'rgba(255, 255, 255, 0.95)',
          transform: 'translateX(5px)',
          boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)'
        }
      }}
      secondaryAction={
        <IconButton
          edge="end"
          aria-label="delete"
          title="Remove fruit"
          onClick={() => handleRemoveFruit(item)}
          sx={{
            color: '#e74c3c',
            '&:hover': {
              color: '#c0392b',
              background: 'rgba(231, 76, 60, 0.1)',
              transform: 'scale(1.1)'
            }
          }}
        >
          <DeleteIcon />
        </IconButton>
      }
    >
      <ListItemText 
        primary={
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <span style={{ fontSize: '1.5rem' }}>{item.split(' ')[0]}</span>
            <span style={{ 
              fontSize: '1.1rem', 
              fontWeight: 500,
              color: '#333'
            }}>
              {item.split(' ')[1]}
            </span>
          </Box>
        }
      />
    </ListItem>
  );
}
