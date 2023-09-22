// Write your JS code here
import {useState, useEffect} from 'react'
import './index.css'

/* const blogData = {
  id: 1,
  title: 'React v16.9.0 and the Roadmap Update',
  imageUrl: 'https://miro.medium.com/max/1050/1*i3hzpSEiEEMTuWIYviYweQ.png',
  avatarUrl: 'https://miro.medium.com/max/4096/1*wiOSfPd2sY0gXSNK9vv6bg.jpeg',
  author: 'Dan Abramov,',
  content:
    'Renaming Unsafe Lifecycle Methods Over a year ago, we announced that unsafe lifecycle methods are getting renamed: componentWillMount \u2192 UNSAFE_componentWillMount componentWillReceiveProps \u2192 UNSAFE_componentWillReceiveProps componentWillUpdate \u2192 UNSAFE_componentWillUpdate React 16.9 does not contain breaking changes, and the old names continue to work in this release. But you will now see a warning when using any of the old names: Warning: componentWillMount has been renamed, and is not recommended for use.',
  topic: 'React.js',
} */

const BlogItemDetails = props => {
  const [blogData, setBlogData] = useState([])

  useEffect(() => {
    const getBlogData = async () => {
      const {match} = props
      const {params} = match
      const {id} = params
      const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
      const data = await response.json()

      const updatedData = {
        id: data.id,
        title: data.title,
        imageUrl: data.image_url,
        avatarUrl: data.avatar_url,
        content: data.content,
        author: data.author,
      }

      setBlogData(updatedData)
    }
    getBlogData()
  }, [props])

  const {title, imageUrl, avatarUrl, content, author} = blogData

  return (
    <>
      <div className="blog-details-container">
        <h1 className="Title">{title}</h1>
        <div className="avatar-container">
          <img src={avatarUrl} alt={author} className="avatar-img" />
          <span className="Author">{author}</span>
        </div>
        <img src={imageUrl} alt={title} className="blog-img" />
        <p className="blog-text">{content}</p>
      </div>
    </>
  )
}

export default BlogItemDetails
