import { useState } from 'react'
import ShareModal from '../ShareModal/ShareModal'
import TrendCard from '../TrendCard/TrendCard'
import './RightSide.scss'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SettingsSuggestOutlinedIcon from '@mui/icons-material/SettingsSuggestOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import CommentOutlinedIcon from '@mui/icons-material/CommentOutlined';

const RightSide = () => {
    const [modalOpened, setModalOpened] = useState(false)

    return (
        <div className='RightSide'>
            <div className="navIcons">
                <div className="icon"><HomeOutlinedIcon /></div>
                <div className="icon"><SettingsSuggestOutlinedIcon /></div>
                <div className="icon"><NotificationsNoneOutlinedIcon /></div>
                <div className="icon"><CommentOutlinedIcon /></div>
            </div>
            <TrendCard />
            <button className="button" onClick={() => setModalOpened(true)}>Share</button>
            {modalOpened && <ShareModal modalOpened={modalOpened} setModalOpened={setModalOpened} />}
        </div>
    )
}

export default RightSide