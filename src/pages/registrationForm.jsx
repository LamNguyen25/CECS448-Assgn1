import React, { useState, useEffect } from 'react'
import { createStyles, makeStyles, Card, CardContent, Typography, Container, TextField, Button } from '@material-ui/core';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import PhotoDropZone from './photoDropZone';

// pop-up 
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';

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

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});


function RegistrationForm() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setconfirmPassword] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [zipCode, setZipCode] = useState("");
    const [loadingStyleName, setLoadingStyleName] = useState("");
    const [referralCode, setReferralCode] = useState({ value: "", error: "" });
    const [emailOptIn, setEmailOptIn] = useState({ value: "", error: "" });
    const [loading, setLoading] = useState(false);
    const [showPassword, setshowPassword] = useState(false);
    const [open, setOpen] = useState(false);

    const classes = useStyles();
    
    useEffect(() => {
        setLoading(false);
        setLoadingStyleName("");
    }, []);

    const handleClickShowPassword = () => {
        setshowPassword(!showPassword);
    };
    
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };


    const handleClickOpen = () => {
        setOpen(true);
    };
    
    const handleClose = () => {
        setOpen(false);
    };

    const handleSubmit = () => {
        setLoadingStyleName("onclick-btn");

        console.log(firstName.value)
        setLoading(true);
        setTimeout(function() {
            setLoadingStyleName("validate");

        }, 2250 );
        setTimeout(function() {
            setLoadingStyleName("");
        }, 1250 );

        setTimeout(function() {
            handleClickOpen();
        }, 2500 );
        
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
                                        value={firstName}
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
                                        value={lastName}
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
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        autoComplete="email"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <InputLabel className={classes.label} htmlFor="outlined-adornment-password"> Password</InputLabel>
                                        <OutlinedInput
                                            id="outlined-adornment-password"
                                            type={showPassword ? 'text' : 'password'}
                                            value={password}
                                            classes={{root: classes.text,}}
                                            onChange={(e) => setPassword(e.target.value)}
                                            endAdornment={
                                            <InputAdornment position="end">
                                                <IconButton
                                                    className="icon-btn"
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
                                            value={confirmPassword}
                                            classes={{root: classes.text,}}
                                            onChange={(e) => setconfirmPassword(e.target.value)}
                                            endAdornment={
                                            <InputAdornment position="end">
                                                <IconButton
                                                    className="icon-btn"
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
                                        value={address}
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
                                        value={city}
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
                                        value={zipCode}
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

                                <Grid item xs={12} className={{ alignItems: 'center' }}>
                                    <button 
                                        type="button" 
                                        className= { loadingStyleName ? loadingStyleName : ""}
                                        onClick={handleSubmit}
                                    ></button>
                                </Grid>
                            </Grid>
                        </form>
                    </div>
                </CardContent>
            </Card>     
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle id="alert-dialog-slide-title">{"Congratulations! you have successfully created an account with us"}</DialogTitle>
                <p className="dialog-text">Your Name: {" " + firstName ? firstName : "" +  " " + lastName ? lastName : ""}</p>
                <p className="dialog-text">Email: {" " + email ? email : "" }</p>
                <DialogActions>
                    <Button className="on-closePopUp" onClick={handleClose}/>
                </DialogActions>
            </Dialog>
         </Container>
           
    )
}


export default RegistrationForm;

