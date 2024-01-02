import './index.css'

const BlogItem = props => {
  const {eachBlog} = props
  const {title, description, publishedDate} = eachBlog
  return (
    <li className="list-container">
      <div className="first-container">
        <h1 className="heading">{title}</h1>
        <p className="para">{publishedDate}</p>
      </div>
      <p className="para">{description}</p>
    </li>
  )
}
export default BlogItem
