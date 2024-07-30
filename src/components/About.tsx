// // About.tsx (or About.js)
import React, { useEffect, useState } from 'react';
import { Button, Typography, Box } from '@mui/material';
import '../assets/styles/About.scss';
import myPic from '../images/aside.png';
import MyCv from '../assets/CYRUS KIMUTAI SE CV.pdf';

// Background images
const backgroundImages = [
  'url("https://images.shiksha.com/mediadata/shikshaOnline/mailers/2021/naukri-learning/oct/27oct-v3/Hobbies-and-Passion.jpg")',
  'url("https://png.pngtree.com/thumb_back/fh260/background/20220926/pngtree-download-wallpapers-red-abstract-background-lines-wallpaper-image_1465946.jpg")',
  'url("https://png.pngtree.com/background/20220817/original/pngtree-blue-background-and-wallpaper-abstract-picture-image_1915865.jpg")',
  'url("https://i.pinimg.com/736x/e2/a6/03/e2a603e2e7213528bb731119be10555f.jpg")',
  'url("https://static.vecteezy.com/system/resources/thumbnails/010/599/697/small_2x/abstract-smooth-curve-line-on-pink-gradient-lighting-color-background-vector.jpg")',
];

const SectionTitle: React.FC<any> = (props) => {
  const [displayText, setDisplayText] = useState<string>('');
  const [showSecondText, setShowSecondText] = useState<boolean>(false);

  useEffect(() => {
    const firstText = "Hi, I'm Cyrus Kimutai";

    let index = 0;
    const interval = setInterval(() => {
      setDisplayText((prev) => prev + firstText[index]);
      index++;
      if (index >= firstText.length) {
        clearInterval(interval);
        setTimeout(() => {
          setDisplayText('');
          setShowSecondText(true);
        }, 1000); // Pause before showing the next text
      }
    }, 50);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (showSecondText) {
      const secondText = "I am a software engineer.";
      let index = 0;
      const interval = setInterval(() => {
        setDisplayText((prev) => prev + secondText[index]);
        index++;
        if (index >= secondText.length) clearInterval(interval);
      }, 50);

      return () => clearInterval(interval);
    }
  }, [showSecondText]);

  return (
    <Typography
      variant="h1"
      sx={{
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        color: 'goldenrod',
        fontWeight: 'bold',
        position: 'relative',
        display: 'inline-block',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        borderRight: '3px solid goldenrod',
        paddingRight: '10px',
        marginBottom: '1rem',
        animation: 'fadeIn 2s ease-out',
        '&::after': {
          content: '""',
          position: 'absolute',
          top: 0,
          right: 0,
          width: '2px',
          height: '100%',
          backgroundColor: 'goldenrod',
        },
      }}
      {...props}
    >
      {displayText}
    </Typography>
  );
};

const SectionSubtitle: React.FC<any> = (props) => (
  <Typography
    variant="h3"
    sx={{
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      color: '#333333',
      textAlign: 'center',
      marginBottom: '1rem',
      animation: 'fadeIn 2s ease-out',
    }}
    {...props}
  />
);

const SectionText: React.FC<any> = (props) => (
  <Typography
    variant="body1"
    sx={{
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      color: '#333333',
      textAlign: 'justify',
      marginBottom: '1rem',
      animation: 'fadeIn 2s ease-out',
    }}
    {...props}
  />
);

const StyledButton: React.FC<any> = (props) => (
  <Button
    variant="contained"
    sx={{
      backgroundColor: 'goldenrod',
      color: '#fff',
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      margin: '0 1rem',
      '&:hover': {
        backgroundColor: '#f9a825',
      },
      animation: 'fadeIn 2s ease-out',
    }}
    {...props}
  />
);

const About: React.FC = () => {
  const [backgroundIndex, setBackgroundIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBackgroundIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 5000); // Change image every 5 seconds

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
          
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff',
            padding: '4rem',
            textAlign: 'center',
            zIndex: 1, // Ensure content is above background
          }}
        >
          <SectionTitle />
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '2rem', marginBottom: '2rem' }}>
            <img
              src={myPic}
              alt="Cyrus Kimutai"
              style={{
                borderRadius: '50%',
                width: '200px',
                height: '200px',
                border: '5px solid goldenrod',
                objectFit: 'cover',
              }}
            />
            <Box sx={{ maxWidth: '600px' }}>
              <SectionSubtitle>
                I am a full stack software developer based in Nairobi Kenya.
              </SectionSubtitle>
              <SectionText>
                My passion for innovation and dedication to self-driven learning have propelled me to continuously hone my skills in creating efficient and user-friendly digital solutions. My expertise spans across both frontend and backend development, making me a versatile and valuable asset in the software development realm.
              </SectionText>
            </Box>
          </Box>
          <Box sx={{ marginTop: '2rem' }}>
            <a href={MyCv} download="Cyrus_Kimutai_CV.pdf">
              <StyledButton>
                Download CV
              </StyledButton>
            </a>
            <StyledButton
              onClick={() => window.open('https://www.linkedin.com/in/cyrus-kimutai-974012313/', '_blank')}
            >
              Hire Me Now
            </StyledButton>
          </Box>
        </Box>
      </Box>
    </section>
  );
};

export default About;
