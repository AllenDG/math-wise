import React from 'react';
import { Container, Typography, Button, Box, Grid } from '@mui/material';
import { School, AccessibilityNew, CheckCircle } from '@mui/icons-material'; 
import "../home/home.css";
import Btn from '../../components/reusable/Button';
import Content_home from './Content_home';

const Home = () => {
  return (
    <div className='Container'>
      <div className='Container-header'>
      <div className='Header'>
        <p>WELCOME TO MATH WISE</p>
        <h1 className='tagDesc'>The Math Learning Platform for Children</h1>
      </div>
      <Btn/>
      </div>

      <Box>
      <Typography variant='h5' className='content-header'>
        Why Choose Math Wise?
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <div className='feature'>
            <School fontSize='large' color='primary' /> {/* School icon */}
            <Typography variant='h5'>Interactive Learning</Typography>
            <Typography variant='body1'>
              Engage students with interactive lessons and activities.
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12} md={4}>
          <div className='feature'>
            <AccessibilityNew fontSize='large' color='primary' /> {/* AccessibilityNew icon */}
            <Typography variant='h5'>Easy to Use</Typography>
            <Typography variant='body1'>
              Our platform is designed to be user-friendly for both students and
              educators.
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12} md={4}>
          <div className='feature'>
            <CheckCircle fontSize='large' color='primary' /> {/* CheckCircle icon */}
            <Typography variant='h5'>Effective Learning</Typography>
            <Typography variant='body1'>
              Improve math skills and boost confidence with our platform.
            </Typography>
          </div>
        </Grid>
      </Grid>
    </Box>
    <Typography variant='h5' className='learn-more-text'>
          Learn more about our application
        </Typography>

      <Content_home/>
    </div>
    
   
    
  )
}

export default Home