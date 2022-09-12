import { useState } from 'react'
import ShareModal from '../ShareModal/ShareModal'
import TrendCard from '../TrendCard/TrendCard'
import './RightSide.scss'

const RightSide = () => {
    const [modalOpened, setModalOpened] = useState(false)

    return (
        <div className='RightSide'>
            <div className="navIcons">
                <div className="icon">Home</div>
                <div className="icon">Set</div>
                <div className="icon">Notif</div>
                <div className="icon">Comm</div>
            </div>
            <TrendCard />
            <button className="button" onClick={() => setModalOpened(true)}>Share</button>
            {modalOpened && <ShareModal modalOpened={modalOpened} setModalOpened={setModalOpened} />}
        </div>
    )
}

export default RightSide