import {
  Avatar,
  Button,
  Grid,
  Paper,
  TextField,
  Typography,
  Radio,
  FormControlLabel,
  FormControl,
  RadioGroup,
  Checkbox,
} from "@mui/material";
import React, { useState } from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";

const Signup = () => {
  const paperStyle = {padding: 20, height:'70vh', width:400, margin:"20px auto"};

  const avatarStyle = { backgroundColor: "blue" };

  const [selectedValue, setSelectedValue] = useState("");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <Grid>
      <Paper elevation={20} style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <AddCircleIcon />
          </Avatar>
          <h2>Sign Up</h2>
          <Typography variant="caption">
            Please fill this form to create an account!
          </Typography>
        </Grid>
        <form>
          <TextField fullWidth label="Name" placeholder="Enter your name" />
          <TextField fullWidth label="Email" placeholder="Enter your email" />

          <FormControl component="fieldset">
            <RadioGroup
              aria-label="gender"
              name="gender"
              value={selectedValue}
              onChange={handleChange}
              row={true}
            >
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
              />
            </RadioGroup>
          </FormControl>

          <TextField
            fullWidth
            label="Phone Number"
            placeholder="Enter your phone number"
          />
          <TextField
            fullWidth
            label="Password"
            placeholder="Enter your password"
          />
          <TextField fullWidth label="Confirm Password" />
          <FormControlLabel
            control={<Checkbox />}
            label="I accept the terms and conditions."
          />

          <Button type="submit" variant="contained" color="primary" fullWidth>
            Sign Up
          </Button>
        </form>
      </Paper>
    </Grid>
  );
};

export default Signup;
