import React from 'react'
import './MostPuplar.css'
import { FaStar } from "react-icons/fa6";
import {motion} from  'framer-motion';
const CardWrapper = (props) => {
    return (
        <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        whileDrag={{ scale: 0.9, rotate: 10 }}
        drag
        className="card-wrapper">

            <img className='poup-img' src={props.img} alt="" />

            <div className="card-containt">
                <h4 className='most-title'>{props.title}<span>xbox</span></h4>

                <a href="">تنزيل</a>


                <ul>
                    <li>
                        <FaStar className='star' />
                        <span>  {props.star}</span>

                    </li>
                    <li>
                        <FaStar className='star' />
                        <span>{props.star2}</span>

                    </li>

                </ul>

            </div>
        </motion.div>


    )
}

export default CardWrapper