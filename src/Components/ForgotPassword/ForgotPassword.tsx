import React from 'react'
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
    LockOutlinedIcon,
    createTheme,
    ThemeProvider
} from "../../common/Index"
import { BackGroundImage } from "../../assets/Image" 

const theme = createTheme();

function ForgotPassword() {
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
                        <Box>
                            <Typography variant="h4" gutterBottom sx={{ color: "maroon", mb: 4 }}>
                                Welcome to the Financial Tracking System
                            </Typography>
                            <Typography variant="h5" gutterBottom>
                                Admin Panel
                            </Typography>
                        </Box>
                    </Grid>

                    {/* Right Side - Forgot Password Form */}
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
                                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                                        <LockOutlinedIcon />
                                    </Avatar>
                                    <Typography component="h1" variant="h5">
                                        Forgot Password
                                    </Typography>
                                    <Box component="form" noValidate sx={{ mt: 3 }}>
                                        <Grid container spacing={2}>
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
                                                    label="Old Password"
                                                    type="password"
                                                    id="password"
                                                    autoComplete="current-password"
                                                />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <TextField
                                                    required
                                                    fullWidth
                                                    name="newPassword"
                                                    label="New Password"
                                                    type="password"
                                                    id="new-password"
                                                    autoComplete="new-password"
                                                />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <FormControlLabel
                                                    control={<Checkbox value="allowExtraEmails" color="primary" />}
                                                    label="I want to receive inspiration, marketing promotions, and updates via email."
                                                />
                                            </Grid>
                                        </Grid>
                                        <Button
                                            type="submit"
                                            fullWidth
                                            variant="contained"
                                            sx={{ mt: 3, mb: 2, borderRadius: "26px" }}
                                            className='forgotPassword-button'
                                        >
                                            Forgot Password
                                        </Button>
                                        <Grid container justifyContent="flex-end">
                                            <Grid item>
                                                <Link href="/signIn" variant="body2">
                                                    Back to Login
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

export default ForgotPassword;
