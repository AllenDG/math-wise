import React from 'react'
import "./exploration.css"
import Video from '../../components/reusable/Video'

import { Grid } from '@mui/material'
import {Box} from '@mui/material'


const explore_content = () => {
  return (
    <div>
        <Box sx={{ width: '100%' }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
        <h1 className='description1'>Make Learning & teaching <br/>
        more effective with active <br/>
        participation of students.</h1>

        </Grid>

        <Grid item xs={6}>
          
        <div className='explore_container'>
          <p>Build an incredible <br/>
              learning experience</p>

              <h6>
                1. Fast and easy to understand <br/><br/><br/>
                2. Mix & match different learning activity <br/><br/><br/>
                3. Interactive website and application <br/><br/><br/>
                4. Test your skills by answering our quiz <br/><br/><br/>
                5. Play on our interactive games in app 

              </h6>
        </div>

        </Grid>
        
      </Grid>
    </Box>
    
    <Video/>
    </div> 
    
        
  )
}

export default explore_content