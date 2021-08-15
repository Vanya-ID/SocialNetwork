import React from 'react';
import {NavLink} from 'react-router-dom';
import h from './Header.module.css'

type HeaderPropsType = {
    isAuth: boolean
    login: string | null
    logout: () => void
}

const Header = (props: HeaderPropsType) => {
    const {login, logout, isAuth} = props

    return <header className={h.header}>
        <img src="https://www.designevo.com/res/templates/thumb_small/brown-circle-and-chocolate-coffee.png"
             className={h.logo} alt="Logo"/>
        <div className={h.loginBlock}>
            {
                isAuth ?
                    <div>
                        {login}
                        <button onClick={logout}>Log out</button>
                    </div>

                    :
                    <NavLink to={'/login'}>Login</NavLink>
            }

        </div>
    </header>
}

export default Header;
