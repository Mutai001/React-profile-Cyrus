import React from 'react';
import '../assets/styles/Blog.scss';

const Blog: React.FC = () => {
  return (
    <section className="blog">
      <div className="blog-content">
        <h2>My Blog</h2>
        <p>Stay tuned for my latest blog posts where I share insights, tutorials, and updates on the latest trends in full-stack development and software engineering.</p>
      </div>
    </section>
  );
};

export default Blog;
