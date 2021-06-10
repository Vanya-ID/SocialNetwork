import React from 'react';
import {NavLink} from 'react-router-dom';
import h from './Header.module.css'

type HeaderPropsType = {
    isAuth: boolean
    login: string | null
    setAuthUserData: (id: number, email: string, login: string) => void
}

const Header = (props: HeaderPropsType) => {
    return <header className={h.header}>
        <img src="https://www.designevo.com/res/templates/thumb_small/brown-circle-and-chocolate-coffee.png"
             className={h.logo} alt="Logo"/>
        <div className={h.loginBlock}>
            {
                props.isAuth ? props.login :
                    <NavLink to={'/login'}>Login</NavLink>
            }

        </div>
    </header>
}

export default Header;
