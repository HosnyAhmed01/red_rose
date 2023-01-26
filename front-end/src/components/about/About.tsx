import React from 'react'
import { motion } from 'framer-motion';               
import './about.scss';
import { faPhone , faPhoneSquare   , faEnvelope} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import whatsapp from '../../assets/whatsapp.png'; 


const About = () => {
  return (
    <motion.div className='about' style={{
      textAlign : "center"
    }}
    initial={{opacity : 0}}
    animate={{opacity : 1}}
    
    >

<div className="container">

    <h1>معرض زهور الوردة  الحمراء</h1>
    <p>
        نتشرف بخدمتكم منذ عام 1996 في جميع انحاء جمهورة مصر العربية وربوع الوطن العربي 
    </p>
    <p>
       حيث يقدم معرض زهور الوردة الحمراء خدمات متميزة للعملاء من خلال خدمة 24 ساعة توصيل وتحصيل داخل نطاق القاهرة والجيزة 
       وخدمة التحصيل من خلال طرق دفع متعددة مثل التحويل البنكي او وستريويون او من خلال فودافون كاش او الدفع عند الاستلام 
    </p>
    <p>
      يقدم معرض زهور الوردة الحمراء تشكيلة متميزة من بوكيهات الورد حيث يفوم على تجهيزها 
      نخبة من افضل منسقين الزهور في مصر 
      باسعار لا تقبل المنافسة من حيث الجودة والسعر 
    </p>

    <p>
      ويقدم معرض زهور الوردة الحمراء خدمات تجهيز الافراح باشكال متنوعة وتصميمات مختلفة وسرعة التنفيذ
    </p>


    <div className='info'>
      <div className='address'>
      <p><span>العنوان :  </span>2 شارع الغيث ناصية شارع الفالوجا امام مستشفي العجوزة محافظة الجيزة ج.م.ع</p>
      </div>


      <div className='phones'>   
        
          <div>
            <span>0261131599</span>
            <FontAwesomeIcon icon={faPhoneSquare} style={{ margin : "0 4px"}}/>
          </div>
            
          <div className='whatsapp'>
            <span>0111222089</span>
            <FontAwesomeIcon icon={faPhone} style={{ margin : "0 4px"}}/>
            , 
            
            <div>
            <img src={whatsapp} alt="whatsapp logo" style={{ margin : "2 2px"}} />
            </div>
    
          </div>


        <div>

        <span>01023538087</span>
            <FontAwesomeIcon icon={faPhone} style={{ margin : "0 4px"}}/>
        </div>
      
        <div className='gamil'>
            <span> hema01112222089@gamil.com</span>
            <FontAwesomeIcon icon={faEnvelope} />
        </div>
      
      </div>

  
    </div>
</div>

    </motion.div>
  )
}


export default About;