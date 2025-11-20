import React from "react";
import { Link } from "react-router-dom";

const BlogSection = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Top 5 Printer Maintenance Tips",
      date: "Dec 28, 2023",
      image: "/assets/img/p2.jpg",
      excerpt:
        "Discover essential printer maintenance tips to keep your machine running smoothly.",
      link: "/blog/top-5-printer-maintenance-tips",
    },
    {
      id: 2,
      title: "Resolving Common Printer Issues",
      date: "Dec 15, 2023",
      image: "/assets/img/b1.jpg",
      excerpt:
        "Learn how to resolve the most common printer errors and keep your workflow uninterrupted.",
      link: "/blog/troubleshooting-common-printer-issues",
    },
    {
      id: 3,
      title: "Choosing the Right Printer for Your Needs",
      date: "Nov 20, 2023",
      image: "/assets/img/b2.jpg",
      excerpt:
        "Explore key factors to consider when purchasing a printer that fits your needs.",
      link: "/blog/choosing-the-right-printer",
    },
  ];

  return (
    <section id="blog" className="blog pt-5">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="headline text-center mb-5">
              <h2 className="pb-3 position-relative d-inline-block">
                LATEST BLOG POSTS
              </h2>
            </div>
          </div>
        </div>
        <div className="row">
          {blogPosts.map((post) => (
            <div key={post.id} className="col-sm-6 col-lg-4 mb-4">
              <div className="blog-card">
                <div className="blog-image">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="img-fluid"
                  />
                </div>
                <div className="blog-content p-4">
                  <h3 className="text-capitalize">{post.title}</h3>
                  <p className="blog-date">{post.date}</p>
                  <p>{post.excerpt}</p>
                  <Link to={post.link} className="btn btn-blue mt-3">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
