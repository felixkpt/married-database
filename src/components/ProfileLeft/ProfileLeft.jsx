import FollowersCard from '../FollowersCard/FollowersCard'
import InfoCard from '../InfoCard/InfoCard'
import LogoSearch from '../LogoSearch/LogoSearch'
import './ProfileLeft.scss'

const ProfileLeft = () => {
    return (
        <div className='ProfileLeft profileSide'>
            <LogoSearch />
            <InfoCard />
            <FollowersCard />
        </div>
    )
}

export default ProfileLeft