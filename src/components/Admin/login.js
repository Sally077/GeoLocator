// Admin login form
import React from "react";
import { Grid, Paper, Avatar, TextField, Button, Typography, Link } from "@material-ui/core";
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const login = () => {
    const  paperStyle = {padding : 20, height : '70vh', width: 280, margin: "20px auto"}
    const avatarStyle = {backgroundColor: "Green"}
    const btnstyle = {margin: "8px 0"}
    return(
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align="center">
                <Avatar style={avatarStyle}><LockOutlinedIcon /></Avatar>
<h2>Sign in</h2>
                </Grid>
                <TextField label="Username" placeholder="Enter Username" fullWidth required />
                <TextField label="Password" placeholder="Enter Password" type="password" fullWidth required />
                <FormControlLabel
        control={
          <Checkbox
            name="checkedB"
            color="custom color"
          />
        }
        label="Remember Me"
      />
      <Button type="Submit" color="custom color" variant="contained" style={btnstyle} fullWidth>Sign in</Button>
         <Typography><Link href="#" >
            Forgot Password ?
            </Link>
        </Typography>
        <Typography>Do you have an Account ?
            <Link href="#" >
            Sign up
        </Link>
        </Typography> 

            </Paper>
        </Grid>
    )
}

export default login;