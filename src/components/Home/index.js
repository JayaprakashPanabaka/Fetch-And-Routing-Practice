import './index.css'
import BlogList from '../BlogList/index'
import UserInfo from '../UserInfo/index'

const Home = () => (
  <div className="home-container">
    <UserInfo />
    <BlogList />
  </div>
)

export default Home
