// // src/components/NavBar.tsx

import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, List, ListItem, Drawer, Avatar, useTheme, useMediaQuery, Typography } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import { styled, keyframes } from '@mui/material/styles';

// Keyframe animation for avatar
const pulse = keyframes`
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
`;

// Styled components
const LogoContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(2),
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
}));

const CustomAvatar = styled(Avatar)(({ theme }) => ({
  backgroundColor: 'linear-gradient(45deg, #ff6e40 30%, #ff8e53 90%)',
  color: '#fff',
  fontWeight: 'bold',
  fontSize: '1.5rem',
  animation: `${pulse} 2s infinite`,
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.2rem',
  },
}));

const NavLinks = styled(List)(({ theme }) => ({
  display: 'flex',
  gap: '2rem',
  listStyle: 'none',
  margin: 0,
  padding: 0,
  flexGrow: 1,
  justifyContent: 'center',
  [theme.breakpoints.down('sm')]: {
    display: 'none',
  },
}));

const DrawerList = styled(List)({
  width: 250,
  backgroundColor: '#333',
});

const DrawerListItem = styled(ListItem)({
  color: '#fff',
  '&:hover': {
    backgroundColor: '#555',
  },
  '& a': {
    textDecoration: 'none',
    color: 'inherit',
    width: '100%',
    display: 'block',
    padding: '8px 16px',
  },
});

const NavBar: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleDrawerOpen = () => setDrawerOpen(true);
  const handleDrawerClose = () => setDrawerOpen(false);

  const navLinks = [
    { text: 'Home', href: '#home' },
    { text: 'About', href: '#about' },
    { text: 'Service', href: '#services' },
    { text: 'Projects', href: '#projects' },
    { text: 'Blog', href: '#blog' },
    { text: 'Contacts', href: '#contact' },
  ];

  return (
    <AppBar position="static" sx={{ backgroundColor: 'goldenrod', padding: '0 2rem' }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <LogoContainer>
          <CustomAvatar>C</CustomAvatar>
        </LogoContainer>

        {isMobile ? (
          <>
            <IconButton
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={handleDrawerOpen}
              sx={{ marginLeft: 'auto' }}
            >
              <MenuIcon />
            </IconButton>

            <Drawer anchor="right" open={drawerOpen} onClose={handleDrawerClose}>
              <DrawerList>
                {navLinks.map((link) => (
                  <DrawerListItem key={link.text} onClick={handleDrawerClose}>
                    <a href={link.href}>{link.text}</a>
                  </DrawerListItem>
                ))}
              </DrawerList>
            </Drawer>
          </>
        ) : (
          <NavLinks>
            {navLinks.map((link) => (
              <ListItem key={link.text} component="a" href={link.href} sx={{ color: '#fff', '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.1)' } }}>
                <Typography variant="body1">{link.text}</Typography>
              </ListItem>
            ))}
          </NavLinks>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
