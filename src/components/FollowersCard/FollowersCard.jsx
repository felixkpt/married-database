import { useEffect, useState } from 'react'
import './FollowersCard.scss'
import { Followers } from '../../Data/FollowersData'

const FollowersCard = () => {
  const [followers, setFollowers] = useState()

  useEffect(() => {
    const unsub = () => {
      setFollowers(Followers)
    }
    return () => {
      unsub()
    }
  }, [])
  return (
    <div className='FollowersCard'>
      <h4>Who is Following you</h4>
      {followers && followers.map((follower, indx) => (
        <div className="follower" key={indx}>
          <div>
            <img src={follower.img} className="followerImg" alt="" />
            <div className="name">
              <span>{follower.name}</span>
              <span>@{follower.username}</span>
            </div>
          </div>
          <button className='button follow-button'>Follow</button>
        </div>
      ))}
    </div>
  )
}

export default FollowersCard