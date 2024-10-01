import React, { useState } from 'react';
import {
    Avatar,
    Button,
    CssBaseline,
    TextField,
    FormControlLabel,
    Checkbox,
    Link,
    Box,
    Typography,
    Container,
    Card,
    CardContent,
    Grid,
    createTheme,
    ThemeProvider, FormControl
} from "../../common/Index";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { Metamask, BackGroundImage } from '../../assets/Image';
import "./SignUp.css";
import { Backend_EndPoint } from '../Constant/EndPoints';
import axios from "axios"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const theme = createTheme();

export default function SignUp() {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [username, setUserName] = useState('')
    const [password, setPassWord] = useState(' ')
    const [confirmPassword, setConfirmPassword] = useState('');
    const [walletAddress, setWalletAddress] = useState('')
    const [email, setEmail] = useState('');
    const [isLoading, setIsLoading] = useState(false)

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            setIsLoading(true)
            const payload = {
                username: username,
                password: password,
                email: email,
                phoneNumber: phoneNumber,
                walletAddress: walletAddress,
                role: "Admin"
            }

            const response = await axios.post(`${Backend_EndPoint}api/v1/user/register`, payload, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            console.log(response, "response");

            if (response.status === 201) {
                toast.success("Admin Registered Successfully");
                setTimeout(() => {
                    window.location.href = '/signIn';
                }, 3000);
            }
        } catch (error) {
            console.log(error);
            if (axios.isAxiosError(error) && error.response) {
                toast.error(error.response.data.error || "An error occurred");
            } else {
                toast.error("An unexpected error occurred");
            }
        } finally {
            setIsLoading(false)
        }
    };

    return (
        <ThemeProvider theme={theme}>
            <Container
                component="main"
                maxWidth={false}
                sx={{
                    minHeight: '100vh',
                    width: '100vw',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundImage: `url(${BackGroundImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    padding: 0,
                    margin: 0,
                    overflow: 'hidden',
                }}
            >
                <ToastContainer />
                <CssBaseline />
                <Grid container spacing={2} sx={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Grid item xs={12} md={6} sx={{ display: { xs: 'none', md: 'block' }, pr: 10 }}>
                        <Box>
                            <Typography variant="h4" gutterBottom sx={{ color: "maroon", mb: 5, marginTop: "-110px" }}>
                                Welcome to the Financial Tracking System
                            </Typography>
                        </Box>
                    </Grid>

                    {/* Right Side - Sign Up Form */}
                    <Grid item xs={12} md={4} sx={{ pl: 8 }}>
                        <Card sx={{ p: 3 }}>
                            <CardContent>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                    }}
                                >
                                    <div style={{ display: "flex", marginTop: "3px" }}>
                                        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                                            <LockOutlinedIcon />
                                        </Avatar>
                                        <Typography component="h1" variant="h5" sx={{ marginTop: "10px" }}>
                                            Sign Up
                                        </Typography>
                                    </div>

                                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                                        <Grid container spacing={2}>
                                            <Grid item xs={12}>
                                                <TextField
                                                    required
                                                    fullWidth
                                                    id="userName"
                                                    label="User Name"
                                                    name="username"
                                                    autoComplete="username"
                                                    value={username}
                                                    onChange={(e) => setUserName(e.target.value)}
                                                />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <TextField
                                                    required
                                                    fullWidth
                                                    id="email"
                                                    label="Email Address"
                                                    name="email"
                                                    autoComplete="email"
                                                    value={email}
                                                    onChange={(e) => setEmail(e.target.value)}
                                                />
                                            </Grid>
                                            <Grid item xs={12} sm={6}>
                                                <TextField
                                                    required
                                                    fullWidth
                                                    name="password"
                                                    label="Password"
                                                    type="password"
                                                    id="password"
                                                    autoComplete="new-password"
                                                    value={password}
                                                    onChange={(e) => setPassWord(e.target.value)}
                                                />
                                            </Grid>
                                            <Grid item xs={12} sm={6}>
                                                <TextField
                                                    required
                                                    fullWidth
                                                    id="Confirm Password"
                                                    label="Confirm Password"
                                                    name="Confirm Password"
                                                    autoComplete="Confirm Password"
                                                    value={confirmPassword}
                                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                                />
                                            </Grid>

                                            <Grid item xs={12}>

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

                                            <Grid item xs={12}>
                                                <TextField
                                                    required
                                                    fullWidth
                                                    name="Wallet Address"
                                                    label="Wallet Address"
                                                    type="Wallet Address"
                                                    id="Wallet Address"
                                                    autoComplete="Wallet Address"
                                                    value={walletAddress}
                                                    onChange={(e) => setWalletAddress(e.target.value)}
                                                />
                                            </Grid>

                                            <Grid item xs={12}>
                                                <FormControlLabel
                                                    control={<Checkbox value="allowExtraEmails" color="primary" />}
                                                    label="I agree all statements in Terms of service."
                                                />
                                            </Grid>
                                        </Grid>
                                        {isLoading ? (
                                            <Button
                                                type="submit"
                                                fullWidth
                                                variant="contained"
                                                sx={{ mt: 3, mb: 2, borderRadius: "26px" }}
                                                className='signUp-button'
                                            >
                                                <span className="loader"></span>
                                            </Button>
                                        ) : (
                                            <Button
                                                type="submit"
                                                fullWidth
                                                variant="contained"
                                                sx={{ mt: 3, mb: 2, borderRadius: "26px" }}
                                                className='signUp-button'
                                            >
                                                Sign Up
                                            </Button>
                                        )}


                                        <Button
                                            type="button"
                                            fullWidth
                                            variant="contained"
                                            sx={{ mt: 3, mb: 2, display: 'flex', alignItems: 'center', borderRadius: "26px" }}
                                            className="signUp-button"
                                        >
                                            <Box
                                                component="img"
                                                src={Metamask}
                                                alt="Metamask Logo"
                                                sx={{ width: '24px', height: '24px', marginRight: '8px' }}
                                            />
                                            Sign Up with Metamask
                                        </Button>
                                        <Grid container justifyContent="flex-end">
                                            <Grid item>
                                                <Link href="/signIn" variant="body2">
                                                    Already have an account? Sign in
                                                </Link>
                                            </Grid>
                                        </Grid>
                                    </Box>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>

                </Grid>
            </Container>
        </ThemeProvider>
    );
}
