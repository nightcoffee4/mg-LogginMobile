import React, { useState } from 'react'
import { Avatar, Grid, Paper, TextField, Checkbox, FormControlLabel, Button, Typography, Link } from '@material-ui/core'
import { makeStyles, ThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { orange, green } from '@material-ui/core/colors';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import PersonIcon from '@material-ui/icons/Person';
import '../App.css'
import { Person } from '@material-ui/icons';


const Login = () => {

    const paperStyle = {
        padding: 30,
        height: '65vh',
        width: 280,
        margin: "20px auto",
        borderRadius: 10,
        backgroundColor: '#FBFFFA',
        //minHeight: '70vh',
        elevation: 10
    }
    const avatarStyle = {
        backgroundColor: green[400],
        height: 70,
        width: 70
    }
    

    return (
        <Grid container spacing={0} justify="center" >
                <Grid align='center'>
                    <Paper style={paperStyle}>
                        <Avatar style={avatarStyle}>
                            <PersonIcon />
                        </Avatar>
                        <h2 style={{color: "#4c4c4c"}}>Sign In</h2>

                        <TextField
                            variant='filled'
                            label='Username'
                            placeholder='Enter Username'
                            fullWidth
                            required
                            name="deneme"
                        />
                        <TextField 
                            variant='filled'
                            label='Password'
                            placeholder='Enter Password'
                            fullWidth 
                            required
                            type='password' />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    name="chackedB"
                                    color="primary"
                                />
                            }
                            label="Remember me."
                        />

                        <Button
                            color='primary'
                            type='submit'
                            variant='contained'
                            fullWidth  > login</Button>

                        <Typography>
                            <Link href="#" >
                                <h5>Forgot password.</h5>
                            </Link>
                        </Typography>
                        <Typography>
                            <Link href="#" >
                                <h6>Create an account.</h6>
                            </Link>
                        </Typography>
                    </Paper>
                </Grid>
        </Grid>
    )
}

export default Login