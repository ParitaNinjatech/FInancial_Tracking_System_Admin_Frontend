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
import { Metamask, BackGroundImage } from '../../assets/Image';
import React, { useState } from 'react'
import { Backend_EndPoint } from '../Constant/EndPoints';
import axios from "axios"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const theme = createTheme();
export default function Signin() {
  const [username, setUserName] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errors, setErrors] = useState({
    username: '',
    email: '',
    password: ''
  });

  const validateForm = (): boolean => {
    let tempErrors = { ...errors };
    let isValid = true;
  
    // Validate only if the username field is not disabled (when email is empty)
    const usernameRegex = /^[a-zA-Z0-9]{6,16}$/;
    if (!email && (!username || !usernameRegex.test(username))) {
      tempErrors.username = 'Username must contain only letters and numbers, and be between 6 to 16 characters long';
      isValid = false;
    } else {
      tempErrors.username = '';
    }
  
    // Validate only if the email field is not disabled (when username is empty)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!username && (!email || !emailRegex.test(email))) {
      tempErrors.email = 'Enter a valid email address';
      isValid = false;
    } else {
      tempErrors.email = '';
    }
  
    // Password validation (always active)
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,12}$/;
    if (!password || !passwordRegex.test(password)) {
      tempErrors.password = 'Password must be 6-12 characters long and include at least one letter, one number, and one special character';
      isValid = false;
    } else {
      tempErrors.password = '';
    }
  
    setErrors(tempErrors);
    return isValid;
  };
  


  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      if (validateForm()) {
        setIsLoading(true)
        const payload = {
          username: username,
          password: password
        }

        const response = await axios.post(`${Backend_EndPoint}api/v1/user/login`, payload, {
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (response.status === 200) {
          toast.success("Admin Login SuccessFully")
          localStorage.setItem('jwtToken', response.data.token);

          setTimeout(() => {
            window.location.href = '/';
          }, 3000);
        }

      } else {
        toast.error("Please correct the form errors");
      }
    }
    catch (error) {
      console.log(error);
      if (axios.isAxiosError(error) && error.response) {
        toast.error(error.response.data.error || "An error occurred");
      } else {
        toast.error("An unexpected error occurred");
      }
    } finally {
      setIsLoading(false)
    }
  }

  const handleUserNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
    if (e.target.value !== '') {
      setEmail('');
    }
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (e.target.value !== '') {
      setUserName('');
    }
  };
  
  return (
    <>
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
          <ToastContainer />
          <Grid container spacing={2} sx={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Grid item xs={12} md={6} sx={{ display: { xs: 'none', md: 'block' }, pr: 10 }}>
              <Box >
                <Typography variant="h4" gutterBottom sx={{ color: "maroon", mb: 4 }}>
                  Welcome to the Financial Tracking System
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
                      Sign In
                    </Typography>
                    <Box component="form" noValidate sx={{ mt: 3 }} onSubmit={handleSubmit}>
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
                            onChange={handleUserNameChange}
                            disabled={!!email}
                            error={Boolean(errors.username && !email)}
                            helperText={errors.username && !email ? errors.username : ''}
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
                            onChange={handleEmailChange}
                            disabled={!!username}
                            error={Boolean(errors.email && !username)}
                            helperText={errors.email && !username ? errors.email : ''}
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
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            error={Boolean(errors.password)}
                            helperText={errors.password}
                          />
                        </Grid>
                        <Grid container justifyContent="flex-end">
                          <Grid item>
                            <Link href="/forgotpassword" variant="body2">
                              Forgot Password
                            </Link>
                          </Grid>
                        </Grid>
                        <Grid item xs={12}>
                          <FormControlLabel
                            control={<Checkbox value="allowExtraEmails" color="primary" />}
                            label="I agree all statements in Terms of service."
                            required
                          />
                        </Grid>
                      </Grid>
                      {
                        isLoading ? (
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
                            Sign In
                          </Button>
                        )
                      }


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
                        Sign In with Metamask
                      </Button>
                      <Grid container justifyContent="flex-end">
                        <Grid item>
                          <Link href="/signup" variant="body2">
                            Don't have an account? Register here
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
    </>
  )
}
