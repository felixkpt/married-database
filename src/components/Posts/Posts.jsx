import { useEffect, useState } from 'react'
import './Posts.scss'
import { PostsData } from '../../Data/PostsData'
import Post from '../Post/Post'

const Posts = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        const getPosts = () => {
            setPosts(PostsData)
        }
        return () => {
            getPosts()
        }
    }, [])
    return (
        <div className='Posts'>
            {posts && posts.map((post, index) => (
                <Post post={post} key={index} />
            ))}
        </div>
    )
}

export default Posts