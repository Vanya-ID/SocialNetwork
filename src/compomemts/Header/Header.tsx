import React from 'react';
import  h from './Header.module.css'

const  Header = () =>{
  return   <header className={h.header}>
        <img src="https://www.designevo.com/res/templates/thumb_small/brown-circle-and-chocolate-coffee.png"
             className={h.logo} alt="Logo"/>
    </header>
}

export  default  Header;
