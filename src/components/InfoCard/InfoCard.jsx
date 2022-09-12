import { useState } from 'react'
import ProfileModal from '../ProfileModal/ProfileModal'
import './InfoCard.scss'

const InfoCard = () => {
    const [modalOpened, setModalOpened] = useState(false)
    return (
        <div className='InfoCard'>
            <div className="infoHead">
                <h4>Your info</h4>
                <span onClick={() => setModalOpened(true)}>Edit</span>
                {modalOpened && <ProfileModal modalOpened={modalOpened} setModalOpened={setModalOpened} />}
            </div>
            <div className="info">
                <span><b>status</b></span>
                <span>In rel</span>
            </div>
            <div className="info">
                <span><b>Lives in</b></span>
                <span>Kapsowar</span>
            </div>
            <div className="info">
                <span><b>Works at</b></span>
                <span>Freelance works</span>
            </div>
            <button className="button">Logout</button>
        </div>
    )
}

export default InfoCard