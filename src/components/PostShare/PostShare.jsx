import './PostShare.scss'
import Profile from '../../img/sdeewgtr54h4y.jpg'
import { useRef, useState } from 'react'
import AddToPhotosOutlinedIcon from '@mui/icons-material/AddToPhotosOutlined';
import VideoCallOutlinedIcon from '@mui/icons-material/VideoCallOutlined';
import AddLocationAltOutlinedIcon from '@mui/icons-material/AddLocationAltOutlined';
import CoPresentOutlinedIcon from '@mui/icons-material/CoPresentOutlined';
const PostShare = () => {
    const [image, setImage] = useState('')
    const imageRef = useRef()

    const handleImage = (e) => {
        var img = e.target.files[0]
        if (img) {
            setImage(URL.createObjectURL(img))
        }
    }

    return (
        <div className='PostShare'>
            <div className='postDefault'>
                <div>
                    <img src={Profile} alt="" />
                </div>
                <div className="input">
                    <input type="text" placeholder="What's happening" />
                    <div className="postOptions">
                        <div onClick={() => imageRef.current.click()} className="postOption" style={{ "--color": "green" }}><AddToPhotosOutlinedIcon /></div>
                        <div className="postOption" style={{ "--color": "var(--orange)" }}><VideoCallOutlinedIcon /></div>
                        <div className="postOption" style={{ "--color": "violet" }}><AddLocationAltOutlinedIcon /> </div>
                        <div className="postOption" style={{ "--color": "purple" }}><CoPresentOutlinedIcon /></div>
                        <button className='button'>Share</button>
                        <input style={{ display: "none" }} ref={imageRef} onChange={handleImage} type="file" />
                    </div>
                </div>

                {image &&
                    <div className="image-preview">
                        <div className="remove" title="Remove image" onClick={() => setImage(null)}>X</div>
                        <img src={image} alt="" />
                    </div>
                }
            </div>


        </div>
    )
}

export default PostShare