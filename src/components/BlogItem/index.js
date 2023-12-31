// Write your JS code here
import {Link} from 'react-router-dom'
// import BlogItemDetails from '../BlogItemDetails/index'
import './index.css'

const BlogItem = props => {
  //   console.log(props)
  const {blogData} = props
  const {id, title, imageUrl, avatarUrl, author, topic} = blogData
  //   console.log(title.props)

  return (
    <>
      <Link to={`/blogs/${id}`} className="blogsLinkContainer">
        <div className="blogsContainer">
          <div className="imgContainer">
            <img className="blogImg" src={imageUrl} alt={`item${id}`} />
          </div>
          <div className="textContainer">
            <span className="topic">{topic}</span>
            <h1 className="title">{title}</h1>
            <div className="authorContainer">
              <img className="avatar" src={avatarUrl} alt={`avatar${id}`} />
              <p className="author">{author}</p>
            </div>
          </div>
        </div>
      </Link>
      {/* <BlogItemDetails id={id} /> */}
    </>
  )
}

export default BlogItem
