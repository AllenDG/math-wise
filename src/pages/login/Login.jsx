import {  Avatar, Grid, Paper, TextField,Checkbox,FormControlLabel,FormGroup, Button, Typography, Link } from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';
import React from 'react';
import './login.css';

const login = () => {

  const paperStyle={padding: 20, height:'70vh', width:400, margin:"20px auto"}
  const avatarStyle={backgroundColor:'blue'}
  const btnStyle={margin:'10px 0'}
 
  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid align="center" margin={"30px"}> 
        <Avatar style={avatarStyle}><LockIcon/></Avatar>
          <h2>Sign In</h2> 
        </Grid>

        <Grid>
        <TextField sx={{mb:3}} label='Username' placeholder='Enter Username' fullWidth required />
        <TextField label='Password' placeholder='Enter Password' type='password' fullWidth required/>
        </Grid>

      <FormGroup>
        <FormControlLabel control={<Checkbox defaultChecked />} label="Remember Me" />
      </FormGroup>
      <Button type='submit' color='primary' variant='contained' style={btnStyle} fullWidth>SIGN IN</Button>
      <Typography>
      <Link href="#">Forgot Password</Link>  
      </Typography>

      <Typography> Do you have an accout?
      <Link href="#">Sign Up</Link>  
      </Typography>

      </Paper>
    </Grid>
  );
};

export default login;