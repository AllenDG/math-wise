import React, { useRef, useState } from 'react';
import './exploration.css';
import { Grid, Box } from '@mui/material';
import Video from '../../components/reusable/Video';


const ExploreContent = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPauseClick = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div>
      <Box sx={{ width: '100%' }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6}>
            <h1 className='description1'>Make Learning & teaching <br />
            more effective with active <br />
            participation of students.</h1>
          </Grid>

          <Grid item xs={6}>
            <div className='explore_container'>
              <p>Build an incredible <br />
                learning experience</p>

              <h6>
                1. Fast and easy to understand <br /><br /><br />
                2. Mix & match different learning activity <br /><br /><br />
                3. Interactive website and application <br /><br /><br />
                4. Test your skills by answering our quiz <br /><br /><br />
                5. Play on our interactive games in the app
              </h6>
            </div>
          </Grid>
        </Grid>
      </Box>

      <div className="video-container">
        <video
          ref={videoRef}
          controls
          preload="auto"
          className="video"
        >
          <source src={<Video/>} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <button
          className="play-pause-button"
          onClick={handlePlayPauseClick}
        >
          {isPlaying ? 'Pause' : 'Play'}
        </button>
      </div>

    
    </div>
  );
}

export default ExploreContent;
