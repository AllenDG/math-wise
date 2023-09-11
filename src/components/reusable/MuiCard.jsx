import React from 'react';
import '../../style/card.css';
import Grid from '@mui/material/Grid';
import { Card, CardContent, CardActions, Button, Typography } from '@mui/material';

const MuiCard = () => {
  return (
    <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 3 }}>
      {/* Add more cards here */}
      <Grid item xs={12} sm={6} md={4}>
        <Card className='custom-card'>
          <CardContent className='content'>
            <Typography variant="h6" color="textSecondary" gutterBottom>
              Word of the Day
            </Typography>
            <Typography variant="h5" component="div">
              Benevolent
            </Typography>
            <Typography variant="subtitle2" color="textSecondary">
              Adjective
            </Typography>
            <Typography variant="body2">
              Well meaning and kindly.
              <br />
              <q>A benevolent smile</q>
            </Typography>
          </CardContent>
          <CardActions className='actions'>
            <Button variant="contained" color="primary" size="small">
              Learn More
            </Button>
          </CardActions>
        </Card>

      </Grid>

      <Grid item xs={12} sm={6} md={4}>
        <Card className='custom-card'>
          <CardContent className='content'>
            <Typography variant="h6" color="textSecondary" gutterBottom>
              Word of the Day
            </Typography>
            <Typography variant="h5" component="div">
              Benevolent
            </Typography>
            <Typography variant="subtitle2" color="textSecondary">
              Adjective
            </Typography>
            <Typography variant="body2">
              Well meaning and kindly.
              <br />
              <q>A benevolent smile</q>
            </Typography>
          </CardContent>
          <CardActions className='actions'>
            <Button variant="contained" color="primary" size="small">
              Learn More
            </Button>
          </CardActions>
        </Card>

      </Grid>

      <Grid item xs={12} sm={6} md={4}>
        <Card className='custom-card'>
          <CardContent className='content'>
            <Typography variant="h6" color="textSecondary" gutterBottom>
              Word of the Day
            </Typography>
            <Typography variant="h5" component="div">
              Benevolent
            </Typography>
            <Typography variant="subtitle2" color="textSecondary">
              Adjective
            </Typography>
            <Typography variant="body2">
              Well meaning and kindly.
              <br />
              <q>A benevolent smile</q>
            </Typography>
          </CardContent>
          <CardActions className='actions'>
            <Button variant="contained" color="primary" size="small">
              Learn More
            </Button>
          </CardActions>
        </Card>

      </Grid>
    </Grid>
  );
};

export default MuiCard;
