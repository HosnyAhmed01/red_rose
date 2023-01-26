import React from 'react';
import logo from '../../assets/logo.jpeg';
import  { motion } from 'framer-motion';
import whats from '../../assets/whatsapp-32.ico';
import { faPhone} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CartItem = ({name , url , alt} : {name : string , url : string , alt : string}) => {
  return (
      <motion.div className="card"
      initial={{opacity : 0 , y : -30}}
      whileInView={{opacity : 1 , y : 0}}
      >
        <div className="product__image">
            <img src={url} alt={alt} />
        </div>
        <h3 className='product__name'>{name}</h3>
        <div className='whatsapp-btn'>
          <a aria-label="Chat on WhatsApp" target='_blank' href={`https://wa.me/201112222089/?text=${url}`}>
            تواصل معنا
            <img src={whats} alt="whatsapp icon"  style={{
              width : 16 , 
              margin : "0 4px"
            }}/>
          </a>
        </div>
        <div className='whatsapp-btn call'>
          <a aria-label="Chat on WhatsApp" target='_blank' href="tel:+201112222890">
            مكالمة هاتفيه
            <FontAwesomeIcon icon={faPhone} style={{
              margin : "0 4px"
            }}/>
          </a>
        </div>
      </motion.div>
  );
}

export default CartItem;
