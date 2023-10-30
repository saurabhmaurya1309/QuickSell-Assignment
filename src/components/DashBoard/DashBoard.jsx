import React from "react";
import { useSelector } from "react-redux";
import { BiLogoDigitalocean } from "react-icons/bi";
import {TbProgress} from "react-icons/tb"
import {BsCircle} from "react-icons/bs"
import {CiCircleAlert} from "react-icons/ci"

import { AiOutlinePlus } from "react-icons/ai";
import {  LuSignalHigh,LuSignalLow,LuSignalMedium} from "react-icons/lu";
import { CgBorderStyleDashed } from "react-icons/cg";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import { MdCancel } from "react-icons/md";




import "./DashBoard.css";
import Card from "../Card/Card";
const icon = {
  "Todo": <BsCircle/>,
  "Backlog": <BiLogoDigitalocean/>,
  "In progress": <TbProgress/>,
  "High":<LuSignalHigh/>,
  "Medium":<LuSignalMedium/>,
  "Low":<LuSignalLow/>,
  "No priority":<CgBorderStyleDashed/>,
  "Urgent":<CiCircleAlert/>,
  "done":<IoCheckmarkDoneCircle/>,
  "cancel":<MdCancel/>
  
}

const DashBoard = () => {
  const { selectedData, user } = useSelector(
    (state) => state.SelectDataReducer
    
  );

  return (
    selectedData && (
      <div className="dashContainer" style={{ justifyContent: "space-evenly" }}>
        {selectedData.map((elem, index) => {
          return (
            <>
              <div key={index} className="dashCardContainer">
                <div className="dashCardHeading flex-sb">
                  <div className="leftView">
                    {user ? (
                      <>
                      <div
                        className="imageContainer relative"
                        style={{ width: "15px", height: "15px", display : 'inline-block' }}
                      >
                        <img
                          style={{
                            width: "100%",
                            height: "100%",
                            borderRadius: "50%",
                          }}
                          src="https://res.cloudinary.com/dxiv2fohz/image/upload/v1698668036/Saurabh/myphoto_xkmdl5.jpg"
                          alt="UserImage"
                        />
                      </div>
                    </>
                      
                    ) : (
                      icon[elem[index]?.title]
                    )}
                    <span>
                      {" "}
                      {elem[index]?.title} {elem[index]?.value?.length}
                    </span>
                  </div>
                  <div className="rightView">
                    <AiOutlinePlus />{" "}
                    <span style={{ letterSpacing: "2px" }}>...</span>
                  </div>
                </div>
                <div className="dashList flex-gap-10">
                  {elem[index]?.value?.map((elem, ind) => {
                    return (
                      <Card id={elem.id} title={elem.title} tag={elem.tag} status={elem.status} />
                    );
                  })}
                </div>
              </div>
            </>
          );
        })}
      </div>
    )
  );
};

export default DashBoard;
