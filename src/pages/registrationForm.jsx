import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import './Form.css';

const useStyles = makeStyles((theme) =>({
    root: {
        minWidth: 300,
        color: '#ffffff',
        backgroundColor: theme.palette.primary.dark,
        alignItems: 'center',
        borderRadius: 15,
        position: "relative",
        // marginBottom: 20,
        // marginTop: 20
    }
  }))



function RegistrationForm() {
    const classes = useStyles();

    return (
         <Container style={{marginTop: 20}} component="main" maxWidth="xs">
            <Card className={classes.root} variant="outlined">
                <CardContent>
                    <Typography variant="h6">
                        Register 
                        <span style={{color: "#3d5afe"}}> New account</span>
                    </Typography>
                    <div className="input-form" style={{color: '#ffffff'}}>
                        <form className="form" noValidate>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        autoComplete="fname"
                                        name="firstName"
                                        variant="outlined"
                                        required
                                        fullWidth
                                        id="firstName"
                                        label="First Name"
                                        // onChange = {this.handleChange}
                                        autoFocus
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        variant="outlined"
                                        required
                                        fullWidth
                                        id="lastName"
                                        label="Last Name"
                                        name="lastName"
                                        autoComplete="lname"
                                    />
                                </Grid>
                            </Grid>
                        </form>

                    </div>

                </CardContent>
            </Card>     

         </Container>
           
    )
}


export default RegistrationForm

