import React from 'react'
import './Card.css';
import { BiLogoDigitalocean } from "react-icons/bi";
import {TbProgress} from "react-icons/tb"
import {BsCircle} from "react-icons/bs"
import {CiCircleAlert} from "react-icons/ci"

// import { AiOutlinePlus } from "react-icons/ai";
import {  LuSignalHigh,LuSignalLow,LuSignalMedium} from "react-icons/lu";
import { CgBorderStyleDashed } from "react-icons/cg";
const icon = {
    "Todo": <BsCircle/>,
    "Backlog": <BiLogoDigitalocean/>,
    "In progress": <TbProgress/>,
    "High":<LuSignalHigh/>,
    "Medium":<LuSignalMedium/>,
    "Low":<LuSignalLow/>,
    "No priority":<CgBorderStyleDashed/>,
    "Urgent":<CiCircleAlert/>
    
  }

const Card = ({id, title, tag, status}) => {
    console.log(status);
  return (
    <div className="cardContainer flex-gap-10" style={{gap : '5px'}}>
        <div className="cardHeading flex-sb">
            <span style={{textTransform : "uppercase"}} className='color-grey'>{id}</span>
            <div className="imageContainer relative" style={{ width : "30px", height : "30px"}}>
                <img style={{width : "100%", height : "100%",  borderRadius : "50%" }}  src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg" alt="UserImage" />
                <div className="showStatus"></div>
            </div>
        </div>
        <div className="cardTitle" style={{fontWeight : 200}} >
            <p>{title}</p>
        </div>
        <div className="cardTags">
        <div className="tags color-grey">{ icon[status]} </div>
            {
                tag?.map((elem, index) => {
                    return <div key={index} className="tags color-grey"> <span>•</span> {elem}</div>
                })
            }
        </div>
    </div>
  )
}

export default Card;