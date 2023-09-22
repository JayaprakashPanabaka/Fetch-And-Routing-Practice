// Write your JS code here
import {useState, useEffect} from 'react'
import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import BlogItem from '../BlogItem/index'

// const blogsList = [
//   {
//     id: 1,
//     title: 'React v16.9.0 and the Roadmap Update',
//     imageUrl: 'https://miro.medium.com/max/1050/1*i3hzpSEiEEMTuWIYviYweQ.png',
//     avatarUrl: 'https://miro.medium.com/max/4096/1*wiOSfPd2sY0gXSNK9vv6bg.jpeg',
//     author: 'Dan Abramov,',
//     topic: 'React.js',
//   },
// ]

const BlogList = () => {
  const [blogsData, setBlogsData] = useState([])

  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const getBlogsData = async () => {
      const response = await fetch('https://apis.ccbp.in/blogs')

      const jsonData = await response.json()
      //   console.log(jsonData)

      const formattedData = jsonData.map(eachItem => ({
        id: eachItem.id,
        title: eachItem.title,
        imageUrl: eachItem.image_url,
        avatarUrl: eachItem.avatar_url,
        author: eachItem.author,
        topic: eachItem.topic,
      }))
      //   console.log(formattedData)

      setBlogsData(formattedData)
      setIsLoading(false)
    }
    getBlogsData()
  }, [])
  return (
    <>
      <div>
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        ) : (
          blogsData.map(list => <BlogItem blogData={list} key={list.id} />)
        )}
      </div>
    </>
  )
}

export default BlogList
