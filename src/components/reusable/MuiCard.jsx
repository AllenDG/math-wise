import React from 'react'
import "../../style/card.css"

import Grid from '@mui/material/Grid';

import { Box, Card, CardContent, CardActions,Button, Typography } from "@mui/material"


const MuiCard = () => {
  return (
    <Grid className='card_container' container rowSpacing={1} columnSpacing={{ xs: 6, sm: 2, md: 3 }}>
  <Grid className='item' item xs={6} md={3}>
   
  <Card  sx={{ minWidth: 300 }}>
      <CardContent className='content'>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Word of the Day
        </Typography>
        <Typography variant="h5" component="div">
         
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions className='content'>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  </Grid>
  
  <Grid className='item' item xs={6} md={3}>
   
  <Card sx={{ minWidth: 300 }}>
      <CardContent className='content'>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Word of the Day
        </Typography>
        <Typography variant="h5" component="div">
         
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  </Grid>

  <Grid className='item' item xs={6} md={3}>
   
  <Card sx={{ minWidth: 300 }}>
      <CardContent className='content'>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Word of the Day
        </Typography>
        <Typography variant="h5" component="div">
         
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  </Grid>
  
</Grid>

    
  )
}

export default MuiCard