import {
  Container,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
  Grid,
  Box,
  Pagination,
  TextField,
  CircularProgress,
  Alert,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { FacebookShareButton, TwitterShareButton, LinkedinShareButton } from 'react-share';
import '../assets/styles/Blog.scss';
import { useState, useEffect } from 'react';

const StyledCard = styled(Card)(({ theme }) => ({
  maxWidth: 345,
  margin: '1rem auto',
  borderRadius: '12px',
  boxShadow: theme.shadows[5],
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: theme.shadows[10],
  },
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
  borderRadius: '12px',
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: theme.palette.primary.main,
    },
    '&:hover fieldset': {
      borderColor: theme.palette.secondary.main,
    },
    '&.Mui-focused fieldset': {
      borderColor: theme.palette.secondary.main,
    },
  },
}));

const StyledButton = styled(Button)(({ theme }) => ({
  borderRadius: '12px',
  marginLeft: '0.5rem',
  backgroundColor: theme.palette.primary.main,
  '&:hover': {
    backgroundColor: theme.palette.secondary.main,
  },
}));

const POSTS_PER_PAGE = 6;

const Blog: React.FC = () => {
  const [posts, setPosts] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const fetchPosts = () => {
    setLoading(true);
    fetch('https://dev.to/api/articles?tag=technology')
      .then((response) => response.json())
      .then((data) => {
        const sortedPosts = data.sort(
          (a: any, b: any) => new Date(b.published_at).getTime() - new Date(a.published_at).getTime()
        );
        setPosts(sortedPosts);
        setTotalPages(Math.ceil(sortedPosts.length / POSTS_PER_PAGE));
        setLoading(false);
      })
      .catch((error) => {
        setError('Error fetching blog posts');
        setLoading(false);
        console.error('Error fetching blog posts:', error);
      });
  };

  useEffect(() => {
    fetchPosts();
    const intervalId = setInterval(fetchPosts, 300000); // Fetch every 5 minutes

    return () => clearInterval(intervalId);
  }, []);

  const handlePageChange = (_event: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value);
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchButtonClick = () => {
    // This can be enhanced to do any specific search action, if needed
  };

  const filteredPosts = posts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const currentPosts = filteredPosts.slice(startIndex, startIndex + POSTS_PER_PAGE);

  return (
    <section className="blog">
      <Container>
        <div className="blog-content">
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
            My Blog
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
            Stay tuned for my latest blog posts where I share insights, tutorials, and updates on the latest trends in full-stack development and software engineering.
          </Typography>
          <Box mb={4} display="flex" justifyContent="center">
            <StyledTextField
              label="Search Posts"
              variant="outlined"
              fullWidth
              onChange={handleSearch}
              value={searchQuery}
              sx={{ maxWidth: 600 }}
            />
            <StyledButton variant="contained" onClick={handleSearchButtonClick}>
              Search
            </StyledButton>
          </Box>

          {loading && (
            <Box display="flex" justifyContent="center" mt={4}>
              <CircularProgress />
            </Box>
          )}

          {error && (
            <Box mb={4} display="flex" justifyContent="center">
              <Alert severity="error">{error}</Alert>
            </Box>
          )}

          {!loading && !error && (
            <>
              <Grid container spacing={4}>
                {currentPosts.length > 0 ? (
                  currentPosts.map((post: any, index: number) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                      <StyledCard>
                        <CardMedia
                          component="img"
                          height="140"
                          image={post.social_image || '/default-image.png'}
                          alt={post.title}
                        />
                        <CardContent>
                          <Typography
                            variant="h5"
                            sx={{
                              color: 'goldenrod',
                              fontWeight: 'bold',
                              fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
                            }}
                          >
                            {post.title}
                          </Typography>
                          <Typography
                            variant="body2"
                            sx={{
                              marginTop: '1rem',
                              color: '#333333',
                              fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
                            }}
                          >
                            {post.description}
                          </Typography>
                          <Box mt={2}>
                            <Button
                              variant="contained"
                              color="primary"
                              href={post.url}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Read More
                            </Button>
                          </Box>
                          <Box mt={2} display="flex" justifyContent="center" gap={1}>
                            <FacebookShareButton url={post.url}>
                              <Button variant="outlined" color="primary">
                                Facebook
                              </Button>
                            </FacebookShareButton>
                            <TwitterShareButton url={post.url} title={post.title}>
                              <Button variant="outlined" color="primary">
                                Twitter
                              </Button>
                            </TwitterShareButton>
                            <LinkedinShareButton url={post.url}>
                              <Button variant="outlined" color="primary">
                                LinkedIn
                              </Button>
                            </LinkedinShareButton>
                          </Box>
                        </CardContent>
                      </StyledCard>
                    </Grid>
                  ))
                ) : (
                  <Grid item xs={12}>
                    <Typography variant="h6" align="center">
                      No posts found
                    </Typography>
                  </Grid>
                )}
              </Grid>
              <Box mt={4} display="flex" justifyContent="center">
                <Pagination
                  count={totalPages}
                  page={currentPage}
                  onChange={handlePageChange}
                  color="primary"
                />
              </Box>
            </>
          )}
        </div>
      </Container>
    </section>
  );
};

export default Blog;
