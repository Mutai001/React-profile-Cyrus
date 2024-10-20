// import React from 'react';
import { Box, Typography, Button, useTheme } from '@mui/material';
import '../assets/styles/About.scss';
import Mypic from '../images/aside.png';
import CvFile from '../assets/CYRUS KIMUTAI SE CV.pdf'; 

const SectionTitle: React.FC<React.PropsWithChildren<object>> = (props) => {
  const theme = useTheme();

  return (
    <Typography
      variant="h1"
      sx={{
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        color: 'goldenrod',
        fontWeight: 'bold',
        position: 'absolute',
        top: '20px',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 2,
        whiteSpace: 'nowrap',
        paddingRight: '10px',
        marginBottom: '1rem',
        textAlign: 'center',
        overflow: 'hidden',
        [theme.breakpoints.down('md')]: {
          fontSize: '2rem',
          whiteSpace: 'normal',
        },
        [theme.breakpoints.down('sm')]: {
          fontSize: '1.5rem',
        },
      }}
      {...props}
    >
      Hi, I'm Cyrus Kimutai, a software engineer.
    </Typography>
  );
};

const SectionSubtitle: React.FC<React.PropsWithChildren<object>> = (props) => {
  const theme = useTheme(); 

  return (
    <Typography
      variant="h3"
      sx={{
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        color: '#333333',
        textAlign: 'center',
        marginBottom: '1rem',
        [theme.breakpoints.down('md')]: {
          fontSize: '1.5rem',
        },
        [theme.breakpoints.down('sm')]: {
          fontSize: '1.25rem',
        },
      }}
      {...props}
    />
  );
};

const About: React.FC = () => {
  const theme = useTheme(); 

  return (
    <section className="about">
      <Box
        sx={{
          position: 'relative',
          height: '100vh',
          overflow: 'hidden',
          background: 'linear-gradient(135deg, #f0f8ff, #add8e6)', // Lighter background color
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '2rem',
          [theme.breakpoints.down('md')]: {
            height: 'auto',
            padding: '1.5rem',
          },
          [theme.breakpoints.down('sm')]: {
            padding: '1rem',
          },
        }}
      >
        <Box
          sx={{
            position: 'relative',
            width: '100%',
            height: 'auto',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#333333',
            zIndex: 1,
            paddingTop: '80px',
            [theme.breakpoints.up('md')]: {
              width: '80%',
            },
          }}
        >
          <SectionTitle />
          <Box sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '1.5rem', 
            marginBottom: '1.5rem',
            flexDirection: 'column', 
            [theme.breakpoints.up('md')]: { 
              flexDirection: 'row' 
            },
          }}>
            <img
              src={Mypic}
              alt="Cyrus Kimutai"
              style={{
                borderRadius: '50%',
                width: '200px',
                height: '200px',
                border: '5px solid goldenrod',
                objectFit: 'cover',
              }}
            />
            <Box sx={{ maxWidth: '90%', textAlign: 'center' }}>
              <SectionSubtitle>
                With a passion for innovation and a commitment to continuous learning, I excel in creating efficient and user-friendly digital solutions. My expertise in both frontend and backend development makes me a versatile asset in the software development field.
              </SectionSubtitle>
            </Box>
          </Box>
          <Box sx={{ display: 'flex', gap: '1rem' }}>
            <Button
              variant="contained"
              color="primary"
              href={CvFile}
              download
              sx={{ textTransform: 'none' }}
            >
              Download CV
            </Button>
            <Button
              variant="contained"
              color="secondary"
              href="mailto:cyruskimutai.it@gmail.com"
              sx={{ textTransform: 'none' }}
            >
              Hire Me
            </Button>
          </Box>
        </Box>
      </Box>
    </section>
  );
};

export default About;
