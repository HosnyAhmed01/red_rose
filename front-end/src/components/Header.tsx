import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg'
import './header.scss';
import { motion } from 'framer-motion';
import { faHouse , faBell , faExclamation  } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header = () => {
    const [expend , setExpedn ] = useState(false)
    const list = [
        {id : 1 , value: 'الصفحة الرئيسية' , icon : 'house' , path : '/'} , 
        {id : 2 , value : 'من نحن' , icon : 'no' , path : '/about'} ,
        {id : 3 , value : 'مناسبات' , icon : 'pel' , path : '/ourworks'} ,

    ];
  return (

   <motion.header
    initial={{y : "-100vh" }}
    animate={{y :0}}
   >
    <div className="container">

     <nav className={`${expend ? 'expend' : ''}`}>
        <div className="burger" onClick={() => {
            setExpedn(!expend)
        }}>
        </div>
        <ul className={`nav-ul ${expend ? 'expend' : ''}`}>
            {
                list.map((item) => {
                    return(
                        <Link to={item.path} key={item.id}>
                            <li >
                            <FontAwesomeIcon icon={item.icon == 'house' ? faHouse : item.icon == 'pel' ? faBell : faExclamation} style={{ padding : "0 5px" }}/>
                                {item.value}
                            </li>
                        </Link>
                    )
                }) 
            }
        </ul>
        <div className="logo">
            <Link to='/'>
            <img src={logo} alt="لوجو معرض زهور الوردة الحمراء" />
            </Link>
        </div>
    </nav>
   </div>
   </motion.header>
  )
}

export default Header;
