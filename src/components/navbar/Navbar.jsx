import React, {useState} from 'react'
import { RiMenu3Line, RiCloseLin, RiCloseLine } from 'react-icons/ri'
import './navbar.css'
import zenom from '../../assets/zenom.png'

const Menu = () => (
    <>
    <p><a href='#Home'>Home</a></p>
    <p><a href='#Conn'>Conn</a></p>
    <p><a href='#New'>New</a></p>
    <p><a href='#Notifs'>Notifs</a></p>
    </>
);

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    return (
    <div>
      <div className="navbar">
        <div className="navbar-logo">
            <img src={zenom} alt="Logo" />
        </div>
        <div className="navbar-links">
            <Menu />
        </div>
        <div className="navbar-log">
            <p>Sign in</p>
            <button>Sign up</button>
        </div>

        <div className="navbar-menu">
            {toggleMenu 
                ? <RiCloseLine color="#fff" size={28} onClick={ () => setToggleMenu(false) } />
                : <RiMenu3Line color="#fff" size={28} onClick={ () => setToggleMenu(true) } />
            }
            {toggleMenu && (
                <nav>
                    <div className="navbar-menu-links">
                        <Menu />
                    </div>
                    <div className="navbar-menu-log">
                        <p>Sign in</p>
                        <button>Sign up</button>
                    </div>
                </nav>
            )}
        </div>
      </div>
    </div>
  )
}

export default Navbar
