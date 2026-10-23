import { blogPosts } from '../data/blogData.js'
import { useModal } from '../context/ModalContext.jsx'

export default function Blog() {
  const { openBlogModal } = useModal()

  return (
    <section className="blog-section" id="blog">
      <div className="container">
        <div className="text-center">
          <div className="section-badge">📰 Founder's Journal</div>
          <h2 className="section-title">Blogs by Samadhan Patil</h2>
          <p className="section-subtitle">
            Our commitment to hygiene, vision for Cafe Nova, and signature recipes.
          </p>
        </div>

        <div className="blog-grid">
          {blogPosts.map((post) => (
            <div className="blog-card" key={post.title}>
              <div className="blog-card-img-wrapper">
                <img src={post.image} alt={post.alt} />
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
                    Read More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
