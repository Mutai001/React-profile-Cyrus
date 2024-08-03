import { Container, Typography, TextField, Button, Box, CircularProgress, Snackbar, IconButton } from '@mui/material';
import { Close as CloseIcon } from '@mui/icons-material';
import '../assets/styles/Contact.scss';
import { useState } from 'react';

const Contact: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [snackbarOpen, setSnackbarOpen] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setError(null);

    try {
      const response = await fetch('https://formspree.io/f/xrbzqeng', { 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      });

      if (response.ok) {
        setSuccess(true);
        setName('');
        setEmail('');
        setMessage('');
        setSnackbarOpen(true);
      } else {
        throw new Error('Failed to send message');
      }
    } catch (err: any) {
      setError(err.message || 'An error occurred');
      setSnackbarOpen(true);
    } finally {
      setLoading(false);
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  return (
    <section className="contacts">
      <Container className="contact-container">
        <Typography
          variant="h2"
          align="center"
          gutterBottom
          sx={{
            marginBottom: '2rem',
            color: '#FF5722',
            fontWeight: 'bold',
            fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
            fontSize: '2.5rem',
          }}
        >
          Contact Me
        </Typography>
        <Typography
          variant="body1"
          align="center"
          sx={{
            marginBottom: '2rem',
            color: '#555555',
            fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
            fontSize: '1.1rem',
          }}
        >
          Feel free to send me a message, and I'll get back to you as soon as possible.
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            maxWidth: '600px',
            margin: '0 auto',
            padding: '1rem',
            backgroundColor: '#ffffff',
            borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          }}
        >
          <TextField
            label="Name"
            variant="outlined"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            fullWidth
          />
          <TextField
            label="Email"
            variant="outlined"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            fullWidth
          />
          <TextField
            label="Message"
            variant="outlined"
            multiline
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            fullWidth
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{ alignSelf: 'center', width: 'fit-content' }}
            disabled={loading}
          >
            {loading ? <CircularProgress size={24} /> : 'Send Message'}
          </Button>
        </Box>

        {/* Snackbar for notifications */}
        <Snackbar
          open={snackbarOpen}
          autoHideDuration={6000}
          onClose={handleCloseSnackbar}
          message={success ? "Message sent successfully!" : error}
          action={
            <IconButton size="small" aria-label="close" color="inherit" onClick={handleCloseSnackbar}>
              <CloseIcon fontSize="small" />
            </IconButton>
          }
          sx={{ backgroundColor: success ? '#4caf50' : '#f44336' }} 
        />
      </Container>
    </section>
  );
};

export default Contact;
