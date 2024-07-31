import React, { useEffect, useState } from 'react';
import { Box, Typography, Button, useTheme } from '@mui/material';
import '../assets/styles/About.scss';
import Mypic from '../images/aside.png';
import CvFile from '../assets/CYRUS KIMUTAI SE CV.pdf'; // Replace with your CV file path

const backgroundImages = [
  'url("https://images.shiksha.com/mediadata/shikshaOnline/mailers/2021/naukri-learning/oct/27oct-v3/Hobbies-and-Passion.jpg")',
  'url("https://png.pngtree.com/thumb_back/fh260/background/20220926/pngtree-download-wallpapers-red-abstract-background-lines-wallpaper-image_1465946.jpg")',
  'url("https://png.pngtree.com/background/20220817/original/pngtree-blue-background-and-wallpaper-abstract-picture-image_1915865.jpg")',
  'url("https://i.pinimg.com/736x/e2/a6/03/e2a603e2e7213528bb731119be10555f.jpg")',
  'url("https://static.vecteezy.com/system/resources/thumbnails/010/599/697/small_2x/abstract-smooth-curve-line-on-pink-gradient-lighting-color-background-vector.jpg")',
];

const SectionTitle: React.FC<any> = (props) => {
  const [displayText, setDisplayText] = useState<string>('');
  const [charIndex, setCharIndex] = useState<number>(0);

  const text = "Hi, I'm Cyrus Kimutai a software engineer."; 

  useEffect(() => {
    if (charIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[charIndex]);
        setCharIndex((prev) => prev + 1);
      }, 100);

      return () => clearTimeout(timeout);
    } else {
      setTimeout(() => {
        setDisplayText('');
        setCharIndex(0);
      }, 3000);
    }
  }, [charIndex, text]);

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
        animation: 'fadeIn 2s ease-out',
        textAlign: 'center',
        overflow: 'hidden',
        borderRight: '.15em solid orange',
        [theme.breakpoints.down('md')]: {
          fontSize: '2rem',
          whiteSpace: 'normal',
        },
        [theme.breakpoints.down('sm')]: {
          fontSize: '1.5rem',
        },
        '&::after': {
          content: '""',
          display: 'inline-block',
          width: '1px',
          height: '1.2em',
          marginLeft: '.1em',
          backgroundColor: 'goldenrod',
          animation: 'blink 1s step-end infinite'
        },
        '@keyframes blink': {
          from: { opacity: 1 },
          to: { opacity: 0 },
        }
      }}
      {...props}
    >
      {displayText}
    </Typography>
  );
};

const SectionSubtitle: React.FC<any> = (props) => {
  const theme = useTheme(); 

  return (
    <Typography
      variant="h3"
      sx={{
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        color: '#333333',
        textAlign: 'center',
        marginBottom: '1rem',
        animation: 'fadeIn 2s ease-out',
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
  const [backgroundIndex, setBackgroundIndex] = useState(0);
  const theme = useTheme(); 

  useEffect(() => {
    const interval = setInterval(() => {
      setBackgroundIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 5000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="about">
      <Box
        sx={{
          position: 'relative',
          height: '100vh',
          overflow: 'hidden',
          background: backgroundImages[backgroundIndex],
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          transition: 'background 1s ease-in-out',
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
            color: '#fff',
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
