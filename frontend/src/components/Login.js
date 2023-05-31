
import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
// import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider} from "@mui/material/styles";
import abbasynlogo from "../images/abbasynlogo.png";
import { useNavigate } from "react-router-dom";
import { InputAdornment } from "@mui/material";
import { Email, Lock } from "@mui/icons-material";
const theme = createTheme();
export default function Login() {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };
  return (
      <Container component="main" maxWidth="xs">
        {/* <CssBaseline /> */}
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            border:"1px solid white",
            borderRadius:" 5px",
            padding:'25px',
            bgcolor:'white',
            boxShadow:'5'
          }}
        >
          <img style={{ margin: 6 }} src={abbasynlogo} />

          <Box
            component="Paper"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              color="success" 
              InputProps={{
                startAdornment: (
                  <InputAdornment sx={{color:'#346448'}} position="start">
                    <Email />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              autoFocus
              color="success" 
              InputProps={{
                startAdornment: (
                  <InputAdornment sx={{color:'#346448'}} position="start">
                    <Lock />
                  </InputAdornment>
                ),
              }}
            />
            <Grid container>
              <Grid item md={6} xs>
                <FormControlLabel
                  control={<Checkbox value="remember"  />}
                  label="Remember me"
                />
              </Grid>
            </Grid>

            <Button
        //  className="loginbutton"
              type="submit"
              fullWidth
              variant="contained"
              onClick={() => {
               navigate('/dashboard');
              }}
              sx={{ mt: 3, mb: 2, backgroundColor: "#346448", ":hover": {
                bgcolor: "#346448",
                color: "white"
              }}}
            >
              Login
            </Button>
          </Box>
        </Box>
      </Container>
  );
}
