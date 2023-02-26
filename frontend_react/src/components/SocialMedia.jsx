import React from 'react'
import {BsTwitter, BsLinkedin, BsGithub, BsInstagram} from 'react-icons/bs'
import { motion } from 'framer-motion';

import {FaFacebookF} from 'react-icons/fa'

const SocialMedia = () => {
  return (
    <div className="app__social" >
        {/* <div>
            <BsTwitter/>
        </div> */}
        {/* <div>
            <FaFacebookF/>
        </div> */}
        <div>
            <BsInstagram />
        </div>
        <div>
          <a href="https://www.linkedin.com/in/shruti-agarwal-b6a5461b9/" target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
            <BsLinkedin />
            </motion.div>
            </a>
        </div>
        <div>
            <BsGithub/>
        </div>
    </div>
  )
}

export default SocialMedia