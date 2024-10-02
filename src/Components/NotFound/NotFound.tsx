import {
  Box, Container, createTheme, ThemeProvider, Typography
} from "../../common/Index"
import { BackGroundImage } from '../../assets/Image';
import 'react-toastify/dist/ReactToastify.css';
const theme = createTheme();
export default function Signin() {

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
          <Typography variant="h4" gutterBottom sx={{ color: "black", mb: 4 }}>
            Oops ! Page Not Found
          </Typography>
        </Container>
      </ThemeProvider>
    </>
  )
}
