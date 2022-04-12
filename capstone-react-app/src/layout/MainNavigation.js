import {
  AppBar,
  CssBaseline,
  Toolbar,
  Button,
  Box,
  IconButton,
  Typography,
} from "@mui/material";
import { AccountCircle, ShoppingCartRounded } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

// This page renders the main navigation bar shown on every page

function MainNavigation() {
  const navigate = useNavigate();

  const handleNavClick = (destination) => {
    navigate(destination);
  };

  return (
    <>
      <CssBaseline />
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="relative">
          <Toolbar>

            {/* This box houses the storename button. This will redired to the home page */}
            <Box sx={{ m: 0 }}>
              <Button
                variant="text"
                color="secondary"
                size="large"
                onClick={() => {
                  handleNavClick("/");
                }}
              >
                <Typography 
                  sx={{
                    fontFamily: "monospace",
                    fontWeight: "oblique",
                    color: "text",
                    fontSize: 30
                  }}
                  >
                ByteWear
              </Typography>
              </Button>
            </Box>

              {/* This box is dedicated to the shopping cart icon/user icon */}
            <Box sx={{ ml: "auto" }}>
              <IconButton
                aria-label="Profile"
                color="secondary"
                onClick={() => {
                  handleNavClick("/login");
                }}
              >
                <AccountCircle />
              </IconButton>
              <IconButton
                aria-label="ShoppingCartIcon"
                color="secondary"
                onClick={() => {
                  handleNavClick("/cart");
                }}
              >
                <ShoppingCartRounded />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}

export default MainNavigation;
