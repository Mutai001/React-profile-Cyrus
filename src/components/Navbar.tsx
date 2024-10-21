import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, List, ListItem, Drawer, Avatar, Typography, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-scroll'; // Import Link from react-scroll
import profileImage from '../images/aside.png';

// Define colors and fonts
const primaryColor = 'goldenrod';
const secondaryColor = '#333333';
const fontFamily = `'Segoe UI', Tahoma, Geneva, Verdana, sans-serif`;

// Keyframe animations
const pulseAnimation = `
  @keyframes pulse {
    0% {
      transform: scale(1);
      box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.7);
    }
    50% {
      transform: scale(1.1);
      box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
    }
    100% {
      transform: scale(1);
      box-shadow: 0 0 0 0 rgba(255, 255, 255, 0);
    }
  }
`;

const NavBar: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleDrawerOpen = () => setDrawerOpen(true);
  const handleDrawerClose = () => setDrawerOpen(false);
  const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);

  const navLinks = [
    { text: 'About', to: 'about' }, // Adjusted to scroll to section ID
    { text: 'Services', to: 'services' },
    { text: 'Projects', to: 'projects' },
    { text: 'Blog', to: 'blog' },
    { text: 'Contact', to: 'contact' },
  ];

  return (
    <>
      <style>
        {pulseAnimation}
      </style>
      <AppBar position="static" sx={{ backgroundColor: primaryColor, fontFamily: fontFamily }}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1, color: 'white' }}>
            <Link
              to="about"
              smooth={true}
              duration={500}
              style={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer' }}
            >
              Cyrus
            </Link>
          </Typography>

          <List sx={{ display: { xs: 'none', sm: 'flex' }, flexGrow: 1 }}>
            {navLinks.map((link) => (
              <ListItem
                key={link.text}
                sx={{
                  color: 'white',
                  '&:hover': {
                    backgroundColor: secondaryColor,
                    transform: 'scale(1.05)',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                  },
                }}
              >
                <Link
                  to={link.to}
                  smooth={true}
                  duration={500}
                  offset={-70} // Offset for fixed navbar
                  style={{ color: 'inherit', textDecoration: 'none' }}
                >
                  {link.text}
                </Link>
              </ListItem>
            ))}
          </List>

          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            sx={{ display: { xs: 'block', sm: 'none' } }}
            onClick={handleDrawerOpen}
          >
            <MenuIcon />
          </IconButton>

          <Drawer anchor="right" open={drawerOpen} onClose={handleDrawerClose}>
            <List sx={{ width: 250 }}>
              {navLinks.map((link) => (
                <ListItem
                  button
                  key={link.text}
                  onClick={handleDrawerClose}
                  sx={{
                    color: primaryColor,
                    '&:hover': {
                      backgroundColor: secondaryColor,
                      color: 'white',
                    },
                  }}
                >
                  <Link
                    to={link.to}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    style={{ color: 'inherit', textDecoration: 'none', width: '100%' }}
                    onClick={handleDrawerClose}
                  >
                    {link.text}
                  </Link>
                </ListItem>
              ))}
            </List>
          </Drawer>

          <IconButton edge="end" color="inherit" onClick={handleMenuClick}>
            <Avatar src={profileImage} sx={{ animation: `pulse 2s infinite` }} />
          </IconButton>

          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
            PaperProps={{
              sx: {
                width: '100%',
                maxWidth: '300px',
                padding: 1,
                backgroundColor: primaryColor,
                color: 'white',
              },
            }}
          >
            {navLinks.map((link) => (
              <MenuItem
                key={link.text}
                onClick={handleMenuClose}
                sx={{
                  color: 'white',
                  '&:hover': {
                    backgroundColor: secondaryColor,
                  },
                }}
              >
                <Link
                  to={link.to}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  style={{ color: 'inherit', textDecoration: 'none' }}
                  onClick={handleMenuClose}
                >
                  {link.text}
                </Link>
              </MenuItem>
            ))}
          </Menu>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NavBar;
