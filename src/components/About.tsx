// import React from 'react';
import { Box, Typography, Button, useTheme } from '@mui/material';
import '../assets/styles/About.scss';
import Mypic from '../images/MY BEST PROFILE.png';
import CvFile from '../assets/CYRUS KIMUTAI SE CV.pdf';

const SectionTitle: React.FC<React.PropsWithChildren<object>> = (props) => {
  const theme = useTheme();

  return (
    <Typography
      variant="h2"
      sx={{
        fontFamily: "'Poppins', sans-serif",
        color: '#333',
        fontWeight: 'bold',
        fontSize: '2.5rem',
        textAlign: 'left',
        marginBottom: '0.5rem',
        [theme.breakpoints.down('sm')]: {
          fontSize: '2rem',
        },
      }}
      {...props}
    >
      Hi! I'm Cyrus Kimutai -
    </Typography>
  );
};

const SectionSubtitle: React.FC<React.PropsWithChildren<object>> = (props) => {
  const theme = useTheme();

  return (
    <Typography
      variant="h4"
      sx={{
        fontFamily: "'Poppins', sans-serif",
        color: '#FFA500',  // Bright orange for emphasis
        fontWeight: '500',
        marginBottom: '1rem',
        fontSize: '2rem',
        textAlign: 'left',
        [theme.breakpoints.down('sm')]: {
          fontSize: '1.5rem',
        },
      }}
      {...props}
    >
      Software Developer
    </Typography>
  );
};

const About: React.FC = () => {
  const theme = useTheme();

  return (
    <section className="about">
      <Box
        sx={{
          position: 'relative',
          minHeight: '100vh',
          background: 'linear-gradient(135deg, #fff7e6, #ffcc80)', // Light yellow background
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '2rem 4rem',
          flexDirection: 'row',
          [theme.breakpoints.down('md')]: {
            flexDirection: 'column',
            justifyContent: 'center',
            padding: '2rem',
          },
        }}
      >
        <Box
          sx={{
            maxWidth: '600px',
            zIndex: 2,
            flex: '1 1 50%',
            [theme.breakpoints.down('md')]: {
              textAlign: 'center',
              marginBottom: '2rem',
            },
          }}
        >
          <SectionTitle />
          <SectionSubtitle />
          <Typography
            variant="body1"
            sx={{
              fontFamily: "'Poppins', sans-serif",
              color: '#333',
              marginBottom: '2rem',
              lineHeight: '1.6',
              textAlign: 'left',
              [theme.breakpoints.down('md')]: {
                textAlign: 'center',
              },
            }}
          >
            With a passion for innovation and a commitment to continuous learning, I excel in creating efficient and user-friendly digital solutions. My expertise in both frontend and backend development makes me a versatile asset in the software development field.
          </Typography>

          <Box sx={{ display: 'flex', gap: '1rem', justifyContent: { md: 'start', xs: 'center' } }}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: '#FFB74D',  // Orange/yellow button color
                color: '#fff',
                textTransform: 'none',
                padding: '0.8rem 2rem',
                borderRadius: '30px',
                fontWeight: 'bold',
              }}
              href={CvFile}
              download
            >
              Download CV
            </Button>
            <Button
              variant="contained"
              sx={{
                backgroundColor: '#333',
                color: '#fff',
                textTransform: 'none',
                padding: '0.8rem 2rem',
                borderRadius: '30px',
                fontWeight: 'bold',
              }}
              href="mailto:cyruskimutai.it@gmail.com"
            >
              Hire Me
            </Button>
          </Box>
        </Box>

        <Box
          sx={{
            position: 'relative',
            width: '300px',
            height: '300px',
            borderRadius: '50%',
            overflow: 'hidden',
            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
            flex: '1 1 40%',
            [theme.breakpoints.down('md')]: {
              marginTop: '2rem',
            },
          }}
        >
          <img
            src={Mypic}
            alt="Cyrus Kimutai"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'contain',
            }}
          />
        </Box>
      </Box>
    </section>
  );
};

export default About;
