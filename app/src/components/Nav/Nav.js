import React from 'react'
import { useSelector } from 'react-redux'
import "./Nav.css"
import { Link } from 'react-router-dom'

const Index = () => {
    // const dispatch = useDispatch();
    
    const name = useSelector((state) => state.user.username);

    var username = null;
    if (name == null) {
        username = (
            <>
                <Link to='/login' className='indexli'>
                    LOGIN
                </Link>
                <Link to='/register' className='indexli'>
                    REGISTER
                </Link>
            </>
        )
    } else {
        username = (
            <>
                <Link to='/chat' className='indexli'>
                    CHAT
                </Link>
                <Link to='/profile' className='indexli usernamelogo'>
                    {name}
                </Link>
            </>
        )
    }    

    return (
        <div className='indexul'>
            <div>
                <Link to='/'>
                    <img
                    src={require('../../img/logo.jpg')}
                    alt="description"
                    className='logoimg'
                    />
                </Link>
            </div>
            <div>
                <Link to='/' className='indexli'>
                    HOME
                </Link>
                { username }
            </div>
        </div>
    )
}

export default Index