import './loading.scss';
import { easeInOut, motion, transform } from 'framer-motion';
import logo from '../../assets/logo.svg'; 


const Loading = () => {
  return (
    <motion.div
        style={{ 
            width : 300 ,  
            aspectRatio : 1, 
            position : 'absolute', 
            top : "50%", 
            left: '50%', 
            transform : 'translate(-50% , -50%)'

        }}
        initial={{
          rotate : 0 ,
        }}

        animate={{ 
            rotate: 360,
        }}
        transition={{
            repeat : Infinity, 
            ease : easeInOut, 
            duration : 2, 
        }}
    >
      <img src={logo} style={{
          maxWidth : "100%"
      }}/>

    </motion.div>
  )
}

export default Loading; 
