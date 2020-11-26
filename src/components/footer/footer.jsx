import React from 'react';

import { BsPhone } from 'react-icons/bs';
import { AiOutlineMail, AiFillGithub, AiOutlineLinkedin } from "react-icons/ai";

import FooterInputs from '../footerInputs/footerInputs';

import './footer.css';

const Footer = () => {
    return (
        <div className='footer__nav'>
            <div className='footer__touch'> <h2> Get In Touch </h2> </div>
            <div className="footer__contact">
                <div className="footer__address"> 
                    <div className='footer__phone'>
                        <div> <BsPhone size='30px' color='#9e2905c0' /> <p> 08036359879 </p> </div> 
                        <div> <AiOutlineMail size='30px' color='#9e2905c0' /> <p> eragatony@gmail.com </p> </div> 
                        <div> <AiFillGithub size='30px' color='#9e2905c0' /> <p> github.com/Toniraga </p> </div> 
                        <div> <AiOutlineLinkedin size='30px' color='#9e2905c0' /> <p> github.com/Toniraga </p> </div> 
                    </div> 
                </div>
                <div className="footer__form"> 
                    <FooterInputs />
                </div>
            </div>
        </div>
	);
}

export default Footer
