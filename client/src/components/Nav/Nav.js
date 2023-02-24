import React from 'react'
import { useSelector } from 'react-redux'
import "./Nav.css"

const Index = () => {
    // const dispatch = useDispatch();
    const name = useSelector((state) => state.user.username);

    var username = null;
    if (name == null) {
        username = (
            <>
                <a href='/login' className='indexli'>
                    LOGIN
                </a>
                <a href='/register' className='indexli'>
                    REGISTER
                </a>
            </>
        )
    } else {
        username = (
            <a href='/profile' className='indexli usernamelogo'>
                {name}
            </a>
        )
    }    

    return (
        <div className='indexul'>
            <div>
                <a href='/'>
                    <img
                    src={require('../../img/logo.jpg')}
                    alt="description"
                    className='logoimg'
                    />
                </a>
            </div>
            <div>
                <a href='/' className='indexli'>
                    HOME
                </a>
                <a href='/chat' className='indexli'>
                    CHAT
                </a>
                { username }
            </div>
        </div>
    )
}

export default Index