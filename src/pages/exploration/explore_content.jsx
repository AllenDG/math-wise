import React from 'react';
import './exploration.css';
import Video from '../../components/reusable/Video';
import { Grid, Box, Typography } from '@mui/material';

const Explore_Content = () => {
  return (
    <div className="explore-content">
      <Box sx={{ width: '100%' }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <div className='description1'>
              <Typography variant="h4">Make Learning & Teaching More Effective</Typography>
              <Typography variant="body1">
                Engage students with active participation.
              </Typography>
            </div>
          </Grid>

          <Grid item xs={12} md={6}>
            <div className='explore-container'>
              <Typography variant="h6">Build an Incredible Learning Experience</Typography>
              <Typography variant="body2">
                <ol>
                  <li>Fast and easy to understand</li>
                  <li>Mix & match different learning activities</li>
                  <li>Interactive website and application</li>
                  <li>Test your skills by answering our quizzes</li>
                  <li>Play interactive games in the app</li>
                </ol>
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Box>

      <Video />
    </div>
  );
}

export default Explore_Content;