import React from 'react'
import "../../style/card.css"

import { Box, Card, CardContent, Typography } from "@mui/material"


const MuiCard = () => {
  return (
    <Box width={"300px"}>
      <Card className='card'>
        <CardContent>
          <Typography gutterBottom variant='h5' component={"div"} >Test</Typography>
          <Typography variant='body2' color="black">
            React is a JavaScript library for building user interface. React can be
            used as a base in the development of single-page or mobile applications.
          </Typography>
        </CardContent>
      </Card>

      <Card className='card'>
        <CardContent>
          <Typography gutterBottom variant='h5' component={"div"} >Test</Typography>
          <Typography variant='body2' color="black">
            React is a JavaScript library for building user interface. React can be
            used as a base in the development of single-page or mobile applications.
          </Typography>
        </CardContent>
      </Card>

      <Card className='card'>
        <CardContent>
          <Typography gutterBottom variant='h5' component={"div"} >Test</Typography>
          <Typography variant='body2' color="black">
            React is a JavaScript library for building user interface. React can be
            used as a base in the development of single-page or mobile applications.
          </Typography>
        </CardContent>
      </Card>




    </Box>

    
  )
}

export default MuiCard