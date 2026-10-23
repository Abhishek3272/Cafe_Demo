import { blogPosts } from '../data/blogData.js'
import { useModal } from '../context/ModalContext.jsx'

export default function BlogPage() {
  const { openBlogModal } = useModal()

  return (
    <div className="page-content blog-page">
      {/* Page Header */}
      <div className="page-header">
        <div className="container">
          <div className="section-badge">📰 Stories &amp; Insights</div>
          <h1 className="page-title">Cafe Nova Journal &amp; Blogs</h1>
          <p className="page-subtitle">
            Read stories directly from Chef Samadhan Patil about culinary techniques, hygiene standards, and café culture in Akluj.
          </p>
        </div>
      </div>

      <div className="container page-body-container">
        <div className="blog-grid">
          {blogPosts.map((post) => (
            <div className="blog-card" key={post.title}>
              <div className="blog-card-img-wrapper">
                <img src={post.image} alt={post.alt} loading="lazy" />
              </div>
              <div className="blog-card-body">
                <div className="blog-meta">
                  <span className="blog-author">{post.author}</span>
                  <span>•</span>
                  <span>{post.date}</span>
                </div>
                <h3 className="blog-title">{post.title}</h3>
                <p className="blog-excerpt">{post.excerpt}</p>
                <div className="blog-card-footer">
                  <button className="btn btn-outline read-blog-btn" onClick={() => openBlogModal(post)}>
                    Read Full Article →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
