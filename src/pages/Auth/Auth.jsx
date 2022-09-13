import './Auth.scss'
import Logo from '../../img/android-chrome-192x192.png'
import { Link } from 'react-router-dom'

const Auth = ({ page }) => {

    return (
        <div className='Auth'>
            <div className="Auth-wrapper">
                <div className="a-left">
                    <img src={Logo} alt="" />
                    <div className="auth-inner">
                        <h1>Married DB</h1>
                        <h6>Married people database</h6>
                    </div>
                </div>
                <div className="a-right">
                    <div className='page-switcher'>
                        <h3>{page === 'sign-up' ? 'Sign up' : 'Sign in'}</h3>
                    </div>
                    {page === 'sign-up' ? <SignUp /> : <SignIn />}
                </div>
            </div>
        </div>
    )
}

function SignUp() {
    return (
        <>
            <form className="auth-form">
                <div className="form-input">
                    <input type="text" className="auth-input" placeholder='Enter a name' />
                </div>
                <div className="form-input">
                    <input type="email" className="auth-input" placeholder='Your email' />
                </div>
                <div className="form-input">
                    <input type="password" className="auth-input" placeholder='Password' />
                </div>
                <div className="form-input">
                    <input type="password" className="auth-input" placeholder='Confirm Password' />
                </div>
                <button className="button">Sign Up</button>
            </form>
            <div className='switch'>
                <span>Already have an account? <Link to="/sign-in">Login</Link></span>
            </div>
        </>
    )
}
function SignIn() {
    return (
        <>
            <form className="auth-form">
                <div className="form-input">
                    <input type="email" className="auth-input" placeholder='Your email' />
                </div>
                <div className="form-input">
                    <input type="password" className="auth-input" placeholder='Password' />
                </div>
                <button className="button">Sign In</button>
            </form>
            <div className='switch'>
                <span>You don't have an account? <Link to="/sign-up">Register</Link></span>
            </div>
        </>
    )
}

export default Auth