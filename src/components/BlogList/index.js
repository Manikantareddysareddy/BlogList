import BlogItem from '../BlogItem'

import './index.css'

const BlogList = props => {
  const {blogsList} = props
  return (
    <div>
      <div className="profile-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/profile-img.png "
          alt="profile"
          className="profile-image"
        />
        <h1 className="heading">Wade Warren</h1>
        <p className="para">Software developer at UK</p>
      </div>
      <ul className="ul-container">
        {blogsList.map(eachItem => (
          <BlogItem eachBlog={eachItem} key={eachItem.id} />
        ))}
      </ul>
    </div>
  )
}
export default BlogList
