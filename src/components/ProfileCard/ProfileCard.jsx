import './ProfileCard.scss'
import Cover from '../../img/VPMcW1RJ956nwCAT.jpg'
import Profile from '../../img/sdeewgtr54h4y.jpg'
const ProfileCard = () => {
    const profilePage = true

    return (
        <div className='ProfileCard'>
            <div className="ProfileImages">
                <img src={Cover} alt="" />
                <img src={Profile} alt="" />
            </div>
            <div className="ProfileName">
                <span>Felix Biwott</span>
                <span>Senior Full Stack</span>
            </div>
            <div className="followStatus">
                <hr />
                <div className="row">
                    <div className="follow">
                        <span>6,857</span>
                        <span>Followers</span>
                    </div>
                    <div className="vl"></div>
                    <div className="follow">
                        <span>2</span>
                        <span>Following</span>
                    </div>
                    {profilePage &&
                        <>
                            <div className="vl"></div>
                            <div className="follow">
                                <span>3</span>
                                <span>Posts</span>
                            </div>
                        </>
                    }
                </div>
                <hr />
            </div>
            {!profilePage && <div className="my-profile">My profile</div>}
        </div >
    )
}

export default ProfileCard