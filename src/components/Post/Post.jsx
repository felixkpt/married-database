import './Post.scss'

const Post = ({ post }) => {
    return (
        <div className='Post'>
            {console.log(post.img)}
            <img src={post.img} alt="" />
            <div className="post-react">
                <div className="icon">Heart</div>
                <div className="icon">Msg</div>
                <div className="icon">Share</div>
            </div>
            <span>{post.likes} likes</span>
            <div className='content'>
                <span>{post.title}</span><p>{post.desc}</p>
            </div>
        </div>
    )
}

export default Post