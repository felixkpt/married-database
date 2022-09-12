import PostSide from '../../components/PostSide/PostSide'
import ProfileSide from '../../components/profileSide/ProfileSide'
import RightSide from '../../components/RightSide/RightSide'
import './Home.scss'

const Home = () => {
    return (
        <div className="home">
            <ProfileSide />
            <PostSide />
            <RightSide />
        </div>
    )
}

export default Home