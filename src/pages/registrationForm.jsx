import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import PhotoDropZone from './photoDropZone';
import './Form.scss';
import { Checkbox } from '@material-ui/core';

const useStyles = makeStyles((theme) =>({
    root: {
        minWidth: 300,
        color: '#ffffff',
        backgroundColor: theme.palette.primary.dark,
        alignItems: 'center',
        borderRadius: 15,
        position: "relative",
    },
    text:{
        color:'white'
    },
    label: {
        color: '#bdb2ff'
    }
  }))

function RegistrationForm() {
    const classes = useStyles();

    const [firstName, setFirstName] = useState({ value: "", error: "" });
    const [lastName, setLastName] = useState({ value: "", error: "" });
    const [email, setEmail] = useState({ value: "", error: "" });
    const [password, setPassword] = useState({ value: "", error: "" });
    const [confirmPassword, setconfirmPassword] = useState({value: "", error: ""});
    const [address, setAddress] = useState({ value: "", error: "" });
    const [city, setCity] = useState({ value: "", error: "" });
    const [zipCode, setZipCode] = useState({ value: "", error: "" });
    const [referralCode, setReferralCode] = useState({ value: "", error: "" });
    const [emailOptIn, setEmailOptIn] = useState({ value: "", error: "" });

    const [loading, setLoading] = useState(false);
    const [showPassword, setshowPassword] = useState(false);

    const handleClickShowPassword = () => {
        setshowPassword(!showPassword);
    };
    
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    return (
         <Container style={{marginTop: 20}} component="main" maxWidth="xs">
            <Card className={classes.root} variant="outlined">
                <CardContent>
                    <Typography variant="h6">
                        Register 
                        <span style={{color: "#3d5afe"}}> New account</span>
                    </Typography>
                    <div className="input-form">
                        <form className="form" noValidate >
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <Typography variant="h7">
                                        Upload a Profile Picutre
                                    </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <PhotoDropZone/>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        autoComplete="fname"
                                        name="firstName"
                                        variant="outlined"
                                        InputProps={{
                                            className: classes.text
                                        }}
                                        InputLabelProps={{
                                            className: classes.label
                                        }}
                                        required
                                        fullWidth
                                        id="firstName"
                                        label="First Name"
                                        value={firstName.value}
                                        onChange={(e) => setFirstName(e.target.value)}
                                        autoFocus
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        variant="outlined"
                                        required
                                        InputProps={{
                                            className: classes.text
                                        }}
                                        InputLabelProps={{
                                            className: classes.label
                                        }}
                                        fullWidth
                                        id="lastName"
                                        label="Last Name"
                                        name="lastName"
                                        value={lastName.value}
                                        onChange={(e) => setLastName(e.target.value)}
                                        autoComplete="lname"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        variant="outlined"
                                        required
                                        InputProps={{
                                            className: classes.text
                                        }}
                                        InputLabelProps={{
                                            className: classes.label
                                        }}
                                        fullWidth
                                        id="email"
                                        label="Email Address"
                                        name="email"
                                        value={email.value}
                                        onChange={(e) => setEmail(e.target.value)}
                                        autoComplete="email"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <InputLabel className={classes.label} htmlFor="outlined-adornment-password"> Password</InputLabel>
                                        <OutlinedInput
                                            id="outlined-adornment-password"
                                            type={showPassword ? 'text' : 'password'}
                                            value={password.value}
                                            classes={{root: classes.text,}}
                                            onChange={(e) => setPassword(e.target.value)}
                                            endAdornment={
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={handleClickShowPassword}
                                                    onMouseDown={handleMouseDownPassword}
                                                    edge="end"
                                                >
                                                    {password.value ? <Visibility /> : <VisibilityOff />}
                                                </IconButton>
                                            </InputAdornment>
                                            }
                                            labelWidth={70}
                                        />
                                </Grid>
                                <Grid item xs={12}>
                                    <InputLabel className={classes.label} htmlFor="outlined-adornment-password"> Confirm Password</InputLabel>
                                        <OutlinedInput
                                            id="outlined-adornment-password"
                                            type={showPassword ? 'text' : 'password'}
                                            value={confirmPassword.value}
                                            classes={{root: classes.text,}}
                                            onChange={(e) => setconfirmPassword(e.target.value)}
                                            endAdornment={
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={handleClickShowPassword}
                                                    onMouseDown={handleMouseDownPassword}
                                                    edge="end"
                                                >
                                                    {password.value ? <Visibility /> : <VisibilityOff />}
                                                </IconButton>
                                            </InputAdornment>
                                            }
                                            labelWidth={70}
                                        />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        variant="outlined"
                                        required
                                        InputProps={{
                                            className: classes.text
                                        }}
                                        InputLabelProps={{
                                            className: classes.label
                                        }}
                                        fullWidth
                                        id="address"
                                        label="Address"
                                        name="address"
                                        value={address.value}
                                        onChange={(e) => setAddress(e.target.value)}
                                        autoComplete="street-address"
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        autoComplete="address-level2"
                                        variant="outlined"
                                        InputProps={{
                                            className: classes.text
                                        }}
                                        InputLabelProps={{
                                            className: classes.label
                                        }}
                                        required
                                        fullWidth
                                        id="city"
                                        label="City"
                                        value={city.value}
                                        onChange={(e) => setCity(e.target.value)}
                                        autoFocus
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        variant="outlined"
                                        required
                                        InputProps={{
                                            className: classes.text
                                        }}
                                        InputLabelProps={{
                                            className: classes.label
                                        }}
                                        fullWidth
                                        id="zipCode"
                                        label="Zip Code"
                                        name="zipCode"
                                        value={zipCode.value}
                                        onChange={(e) => setZipCode(e.target.value)}
                                        autoComplete="postal-code"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        variant="outlined"
                                        required
                                        InputProps={{
                                            className: classes.text
                                        }}
                                        InputLabelProps={{
                                            className: classes.label
                                        }}
                                        fullWidth
                                        id="referral"
                                        label="Referral Code (Optional)"
                                        name="referral"
                                        value={referralCode.value}
                                        onChange={(e) => setReferralCode(e.target.value)}
                                        autoComplete="postal-code"
                                    />
                                </Grid>
                                <Grid item xs={12} sm={2}>
                                    <Checkbox
                                         value={emailOptIn.value}
                                         onChange={(e) => setEmailOptIn(e.target.value)}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={10}>
                                    <Typography variant="h7">
                                        Send me marketing promotions and updates via email
                                    </Typography>
                                </Grid>
                            </Grid>
                        </form>

                    </div>

                </CardContent>
            </Card>     

         </Container>
           
    )
}


export default RegistrationForm;

