import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Paper } from '@mui/material';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Login from '../pages/login/Login';
import Signup from '../pages/signup/Signup';

const SignInOutContainer = () => {

  const [value, setValue] = React.useState(2);

  const handleChange = (event, newValue) => {
    setValue(newValue);

  };

  const paperStyle={width:400, margin:"50px auto"}

  function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;
    
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  return (
<Paper style={paperStyle}>
    
<Tabs value={value} onChange={handleChange} aria-label="disabled tabs example">
      <Tab label="Sign In" />
      
      <Tab label="Sign Up" />
    </Tabs>
    
    <CustomTabPanel value={value} index={0}>
        <Login/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <Signup/>
      </CustomTabPanel>

</Paper>
  )
}

export default SignInOutContainer;