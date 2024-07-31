import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, List, ListItem, Drawer, Avatar, Typography, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
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
    { text: 'About', href: '/' },
    { text: 'Services', href: '/services' },
    { text: 'Projects', href: '/projects' },
    { text: 'Blog', href: '/blog' },
    { text: 'Contact', href: '/contact' },
  ];

  return (
    <>
      <style>
        {pulseAnimation}
      </style>
      <AppBar position="static" sx={{ backgroundColor: primaryColor, fontFamily: fontFamily }}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1, color: 'white' }}>
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>Cyrus</Link>
          </Typography>

          <List sx={{ display: { xs: 'none', sm: 'flex' }, flexGrow: 1 }}>
            {navLinks.map((link) => (
              <ListItem
                key={link.text}
                component={Link}
                to={link.href}
                sx={{
                  color: 'white',
                  '&:hover': {
                    backgroundColor: secondaryColor,
                    transform: 'scale(1.05)',
                    transition: 'all 0.3s ease',
                  },
                }}
              >
                {link.text}
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
                  component={Link}
                  to={link.href}
                  onClick={handleDrawerClose}
                  sx={{
                    color: primaryColor,
                    '&:hover': {
                      backgroundColor: secondaryColor,
                      color: 'white',
                    },
                  }}
                >
                  {link.text}
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
                component={Link}
                to={link.href}
                sx={{
                  color: 'white',
                  '&:hover': {
                    backgroundColor: secondaryColor,
                  },
                }}
              >
                {link.text}
              </MenuItem>
            ))}
          </Menu>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NavBar;
