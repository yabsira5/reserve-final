import * as React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';

const Hotels = [
    {
      name: 'Capital Hotel',
      desc: 'A nice place',
      price: 'ETB 900',
    },
    {
      name: 'Ghion Hotel',
      desc: 'Safe and sound',
      price: 'ETB 600',
    },
    {
      name: 'Sodere',
      desc: 'A different resort',
      price: 'ETB 500',
    },
    {
      name: 'Paramount Hotel',
      desc: 'Your desired location',
      price: 'ETB 1400',
    },
    { name: 'Booking', desc: '', price: 'Free' },
  ];

  const addresses = ['Addis Ababa', 'Hawassa', 'Bahir Dar', 'Addis Ababa', 'Adama'];

const ReviewOrder = () => {
    
    return (
        <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Order Summary
      </Typography>
      <List disablePadding>
        {Hotels.map((Hotels) => (
          <ListItem key={Hotels.name} sx={{ py: 1, px: 0 }}>
            <ListItemText primary={Hotels.name} secondary={Hotels.desc} />
            <Typography variant="body2">{Hotels.price}</Typography>
          </ListItem>
        ))}

        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            ETB 3400.00
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Booking
          </Typography>
          <Typography gutterBottom>Zablon Dereje</Typography>
          <Typography gutterBottom>{addresses.join(', ')}</Typography>
        </Grid>
      </Grid>
    </React.Fragment>
    );
};

export default ReviewOrder;