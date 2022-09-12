import './LogoSearch.scss'
import Logo from '../../img/android-chrome-192x192.png'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
const LogoSearch = () => {
    return (
        <div className='LogoSearch'>
            <img className='logo' src={Logo} alt="" />
            <div className="Search">
                <input type="text" placeholder='Explore' />
                <div className="s-icon">
                    <SearchOutlinedIcon />
                </div>
            </div>
        </div>
    )
}

export default LogoSearch