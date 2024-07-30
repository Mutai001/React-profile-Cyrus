import { Box, Typography, Link, Grid, IconButton } from '@mui/material';
import { Facebook, Twitter, Instagram, GitHub } from '@mui/icons-material';
import { styled } from '@mui/material/styles';

// Custom styled components
const FooterContainer = styled(Box)(({ theme }) => ({
  backgroundColor: 'goldenrod',
  color: '#fff',
  padding: theme.spacing(4, 0),
  width: '100%',
  position: 'relative',
  bottom: 0,
  left: 0,
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(2, 0),
  },
}));

const FooterLink = styled(Link)(({ theme }) => ({
  color: '#fff',
  margin: theme.spacing(0, 0.5),
  [theme.breakpoints.down('sm')]: {
    display: 'block',
    margin: theme.spacing(1, 0),
  },
}));

const FooterIcon = styled(IconButton)(({ theme }) => ({
  color: '#fff',
  margin: theme.spacing(0, 1),
  '&:hover': {
    color: '#333333',
  },
}));

const Footer = () => {
  return (
    <FooterContainer>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} md={4}>
          <Typography variant="h6" align="center">Follow Us</Typography>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1rem' }}>
            <a href="#" aria-label="Facebook">
              <FooterIcon><Facebook /></FooterIcon>
            </a>
            <a href="#" aria-label="Twitter">
              <FooterIcon><Twitter /></FooterIcon>
            </a>
            <a href="#" aria-label="Instagram">
              <FooterIcon><Instagram /></FooterIcon>
            </a>
            <a href="#" aria-label="GitHub">
              <FooterIcon><GitHub /></FooterIcon>
            </a>
          </div>
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography variant="h6" align="center">Quick Links</Typography>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '1rem' }}>
            <FooterLink href="#">Home</FooterLink>
            <FooterLink href="#">About</FooterLink>
            <FooterLink href="#">Services</FooterLink>
            <FooterLink href="#">Contact</FooterLink>
          </div>
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography variant="h6" align="center">Contact Me</Typography>
          <Typography align="center" variant="body2" style={{ marginTop: '1rem' }}>
            23 Soy, Nairobi, Kenya, 30100
          </Typography>
          <Typography align="center" variant="body2">
            (+254) 707-071-440
          </Typography>
          <Typography align="center" variant="body2">
          cyruskimutai.it@gmail.com          
          </Typography>
        </Grid>
      </Grid>
    </FooterContainer>
  );
};

export default Footer;
