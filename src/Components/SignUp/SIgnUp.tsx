import React from 'react';
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
    CardContent, Grid, LockOutlinedIcon, createTheme, ThemeProvider
} from "../../common/Index"
import { Metamask,BackGroundImage } from '../../assets/Image';
import "./SignUp.css"

const theme = createTheme();

export default function SignUp() {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
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
                <CssBaseline />
                <Grid container spacing={2} sx={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Grid item xs={12} md={6} sx={{ display: { xs: 'none', md: 'block' }, pr: 10 }}>
                        <Box >
                            <Typography variant="h4" gutterBottom sx={{ color: "maroon", mb: 4 }}>
                                Welcome to the Financial Tracking System
                            </Typography>
                            <Typography variant="h5" gutterBottom>
                                Admin Panel
                            </Typography>
                        </Box>
                    </Grid>

                    {/* Right Side - Sign Up Form */}
                    <Grid item xs={12} md={4} sx={{ pl: 8 }} >
                        <Card sx={{ p: 3 }}>
                            <CardContent>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',

                                    }}
                                >
                                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                                        <LockOutlinedIcon />
                                    </Avatar>
                                    <Typography component="h1" variant="h5">
                                        Sign Up
                                    </Typography>
                                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                                        <Grid container spacing={2}>
                                            <Grid item xs={12} sm={6}>
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
                                            <Grid item xs={12} sm={6}>
                                                <TextField
                                                    required
                                                    fullWidth
                                                    id="lastName"
                                                    label="Last Name"
                                                    name="lastName"
                                                    autoComplete="family-name"
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
                                                />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <TextField
                                                    required
                                                    fullWidth
                                                    name="password"
                                                    label="Password"
                                                    type="password"
                                                    id="password"
                                                    autoComplete="new-password"
                                                />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <FormControlLabel
                                                    control={<Checkbox value="allowExtraEmails" color="primary" />}
                                                    label="I want to receive inspiration, marketing promotions and updates via email."
                                                />
                                            </Grid>
                                        </Grid>
                                        <Button
                                            type="submit"
                                            fullWidth
                                            variant="contained"
                                            sx={{ mt: 3, mb: 2 ,borderRadius:"26px"}}
                                            className='signUp-button'
                                        >
                                            Sign Up
                                        </Button>

                                        <Button
                                            type="button"
                                            fullWidth
                                            variant="contained"
                                            sx={{ mt: 3, mb: 2, display: 'flex', alignItems: 'center',borderRadius:"26px"}} 
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
