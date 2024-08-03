import React from 'react';
import { Container, Typography, Grid, Paper, Card, CardContent, CardMedia, List, ListItem, ListItemText } from '@mui/material';
import WebIcon from '@mui/icons-material/Web';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import AssessmentIcon from '@mui/icons-material/Assessment';
import CodeIcon from '@mui/icons-material/Code';
import { styled } from '@mui/material/styles';

// Define the services data
const services = [
  {
    title: 'Web Development',
    description: 'I offer professional full-stack web development services using the latest technologies. Whether you need a dynamic frontend, a robust backend, or seamless integration of both, I have the skills to deliver high-quality web applications.',
    icon: <WebIcon color="primary" fontSize="large" />
  },
  {
    title: 'Technologies I work with:',
    description: 'Frontend: HTML, CSS, SASS, SCSS, JavaScript, TypeScript, React\nBackend: Node.js, Drizzle ORM, SQL, PostgreSQL',
    icon: <CodeIcon color="primary" fontSize="large" />
  },
  {
    title: 'UI/UX Design',
    description: 'I create visually appealing and user-friendly interfaces that enhance the overall user experience. My designs are tailored to meet the specific needs of each project, ensuring that they are both aesthetically pleasing and highly functional.',
    icon: <DesignServicesIcon color="primary" fontSize="large" />
  },
  {
    title: 'Consulting',
    description: 'Need expert advice on your software development project? I provide consulting services to help you navigate the complexities of web development, offering insights and recommendations to ensure the success of your project.',
    icon: <AssessmentIcon color="primary" fontSize="large" />
  }
];

// Styled Paper component with animation and styling
const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: '2rem',
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  backgroundColor: theme.palette.background.paper,
  borderRadius: '12px',
  boxShadow: theme.shadows[5],
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  '&:hover': {
    transform: 'translateY(-10px)',
    boxShadow: theme.shadows[10],
  }
}));

// Styled Card component
const StyledCard = styled(Card)(({ theme }) => ({
  maxWidth: 345,
  margin: '1rem auto',
  borderRadius: '12px',
  boxShadow: theme.shadows[5],
  '&:hover': {
    boxShadow: theme.shadows[10],
  },
}));

const Services: React.FC = () => {
  return (
    <section className="services" style={{ background: 'linear-gradient(to right, #f0f4f8, #e8eaf6)', padding: '4rem 0', minHeight: '100vh' }}>
      <Container>
        <StyledPaper>
          <Typography
            variant="h2"
            align="center"
            gutterBottom
            sx={{
              marginBottom: '2rem',
              color: 'goldenrod',
              fontWeight: 'bold',
              fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
              fontSize: '2.5rem',
            }}
          >
            My Services
          </Typography>
          <Grid container spacing={4}>
            {services.map((service, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <StyledCard>
                  <CardMedia
                    component="div"
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      height: 140,
                      backgroundColor: 'background.default',
                      borderRadius: '12px 12px 0 0',
                    }}
                  >
                    {service.icon}
                  </CardMedia>
                  <CardContent>
                    <Typography
                      variant="h6"
                      sx={{
                        marginTop: '1rem',
                        color: 'goldenrod',
                        fontWeight: 'bold',
                        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
                        fontSize: '1.25rem',
                      }}
                    >
                      {service.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        marginTop: '1rem',
                        color: '#333333',
                        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
                        fontSize: '1rem',
                      }}
                    >
                      {service.description}
                    </Typography>
                  </CardContent>
                </StyledCard>
              </Grid>
            ))}
          </Grid>
          <Typography
            variant="h3"
            align="center"
            gutterBottom
            sx={{
              marginTop: '4rem',
              marginBottom: '2rem',
              color: 'goldenrod',
              fontWeight: 'bold',
              fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
              fontSize: '2rem',
            }}
          >
            My Approach
          </Typography>
          <List sx={{ maxWidth: '800px', margin: '0 auto', padding: 0 }}>
            <ListItem>
              <ListItemText
                primary="Client Collaboration"
                secondary="I work closely with clients to understand their needs and ensure that the final product meets their expectations."
                primaryTypographyProps={{ fontSize: '1.25rem', fontWeight: 'bold' }}
                secondaryTypographyProps={{ fontSize: '1rem' }}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Agile Development"
                secondary="I use agile methodologies to ensure continuous improvement and timely delivery of high-quality solutions."
                primaryTypographyProps={{ fontSize: '1.25rem', fontWeight: 'bold' }}
                secondaryTypographyProps={{ fontSize: '1rem' }}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Quality Assurance"
                secondary="Thorough testing and quality assurance processes are integral to ensure a bug-free and reliable final product."
                primaryTypographyProps={{ fontSize: '1.25rem', fontWeight: 'bold' }}
                secondaryTypographyProps={{ fontSize: '1rem' }}
              />
            </ListItem>
          </List>
        </StyledPaper>
      </Container>
    </section>
  );
};

export default Services;
