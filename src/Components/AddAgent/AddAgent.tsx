import React,{useState} from 'react'
import { Box, Typography, Grid, TextField, FormControl, Button } from '../../common/Index'
import "./AddAgent.css";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css'; // Importing default styles

function AddAgent() {
    const [phoneNumber, setPhoneNumber] = useState('');
    return (
        <div className='background-image'>
            <div className='box-Container'>
                <Box
                    sx={{
                        backgroundColor: '#fff',
                        padding: '15px',
                        borderRadius: '8px',
                        boxShadow: '0px 4px 12px rgba(0,0,0,0.1)',
                        marginBottom: '20px',
                        width: " 99%"
                    }}
                >
                    <Typography variant="h4" sx={{ fontWeight: "bold" }}>Add Agent</Typography>
                    <Typography variant="body2">Dashboard / Add Agent</Typography>
                </Box>
                <Box
                    sx={{
                        flexGrow: 1,
                        backgroundColor: '#f4f4f4',
                        padding: '20px',
                    }}
                >
                    <Box
                        sx={{
                            backgroundColor: '#fff',
                            height: '1000px',
                            marginTop: '20px',
                            borderRadius: '8px',
                            boxShadow: '0px 4px 12px rgba(0,0,0,0.1)',
                            padding: '20px',

                        }}
                    > 
                    <p style={{fontWeight:"bold"}}>Personal Information</p>
                        <Box component="form" noValidate sx={{ mt: 3 }}>
                            <Grid container spacing={2}>
                                <Grid item xs={10} sm={5}>
                                    <TextField
                                        autoComplete="given-name"
                                        name="firstName"
                                        required
                                        fullWidth
                                        id="firstName"
                                        label="First Name"
                                        autoFocus
                                    />
                                </Grid>
                                <Grid item xs={10} sm={5}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="lastName"
                                        label="Last Name"
                                        name="lastName"
                                        autoComplete="family-name"
                                    />
                                </Grid>
                                <Grid item xs={10}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="userName"
                                        label="User Name"
                                        name="username"
                                        autoComplete="username"
                                    />
                                </Grid>
                                <Grid item xs={10}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="email"
                                        label="Email Address"
                                        name="email"
                                        autoComplete="email"
                                    />
                                </Grid>

                                <Grid item xs={10}>

                                    <FormControl fullWidth variant="outlined">
                                        <PhoneInput
                                            country={'us'}
                                            value={phoneNumber}
                                            onChange={setPhoneNumber}
                                            inputProps={{
                                                name: 'phone',
                                                required: true,
                                                id: 'phoneNumber',
                                            }}
                                            containerStyle={{
                                                width: '100%',
                                            }}
                                            inputStyle={{
                                                height: '56px',
                                                width: '100%',
                                                borderRadius: '4px',
                                            }}
                                        />
                                    </FormControl>
                                </Grid>
                            </Grid>
                        </Box>

                        <p style={{fontWeight:"bold"}}>Residential Information</p>
                        <Box component="form" noValidate sx={{ mt: 3 }}>
                            <Grid container spacing={2}>
                                <Grid item xs={10} sm={5}>
                                    <TextField
                                        autoComplete="Address Line 1"
                                        name="Address Line 1"
                                        required
                                        fullWidth
                                        id="Address Line 1"
                                        label="Address Line 1"
                                        autoFocus
                                    />
                                </Grid>
                                <Grid item xs={10} sm={5}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="Post Code"
                                        label="Post Code"
                                        name="Post Code"
                                        autoComplete="Post Code"
                                    />
                                </Grid>
                                <Grid item xs={10}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="Address Line 2"
                                        label="Address Line 2"
                                        name="Address Line 2"
                                        autoComplete="Address Line 2"
                                    />
                                </Grid>
                                <Grid item xs={10}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="Town"
                                        label="Town"
                                        name="Town"
                                        autoComplete="Town"
                                    />
                                </Grid>

                                <Grid item xs={10}>
                                <TextField
                                        required
                                        fullWidth
                                        id="State"
                                        label="State"
                                        name="State"
                                        autoComplete="State"
                                    />
                                    
                                </Grid>
                                <Grid item xs={10}>
                                <TextField
                                        required
                                        fullWidth
                                        id="Country"
                                        label="Country"
                                        name="Country"
                                        autoComplete="Country"
                                    />
                                    
                                </Grid>
                            </Grid>
                        </Box>


                        <p style={{fontWeight:"bold"}}>Wallet Information</p>
                        <Box component="form" noValidate sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                                <Grid item xs={10}>
                                    <TextField
                                        autoComplete="Wallet Address"
                                        name="Wallet Address"
                                        required
                                        fullWidth
                                        id="Wallet Address"
                                        label="Wallet Address"
                                        autoFocus
                                    />
                                </Grid>
                                </Grid>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 2, mb: 1, borderRadius: "26px" }}
                                className='Add-button'
                            >
                                Add Agent
                            </Button>

                        </Box>
                    </Box>
                </Box>
            </div>
        </div>
    )
}

export default AddAgent
