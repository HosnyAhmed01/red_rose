import { easeInOut, motion, transform } from 'framer-motion';
import logo from '../../assets/logo.svg'; 
import './loadin.scss';

const Loading = () => {
  return (
      <motion.div
          className='spin'
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
